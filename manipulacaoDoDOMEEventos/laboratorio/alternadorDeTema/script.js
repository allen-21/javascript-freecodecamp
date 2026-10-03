const button = document.querySelector("#theme-switcher-button");
const dropdown = document.querySelector("#theme-dropdown");
const status = document.querySelector('[aria-live="polite"]');

const themes = [
  {
    name: "light",
    message: "Light theme selected."
  },
  {
    name: "dark",
    message: "Dark theme selected."
  }
];

button.addEventListener("click", () => {
  dropdown.hidden = !dropdown.hidden;

  button.setAttribute(
    "aria-expanded",
    String(!dropdown.hidden)
  );
});

dropdown.addEventListener("click", (event) => {
  const selectedTheme = event.target.closest('[role="menuitem"]');

  if (!selectedTheme) return;

  const themeName = selectedTheme.textContent.trim().toLowerCase();

  const theme = themes.find(
    (theme) => theme.name === themeName
  );

  if (!theme) return;

  document.body.classList.remove("theme-light", "theme-dark");

  document.body.classList.add(`theme-${theme.name}`);

  status.textContent = theme.message;

  dropdown.hidden = true;
  button.setAttribute("aria-expanded", "false");
});