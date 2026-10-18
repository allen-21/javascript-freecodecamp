
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");

const categoryDropdown = document.getElementById("category-dropdown");
const categoryNames = document.querySelectorAll(".category-name");

const addBookmarkButton = document.getElementById("add-bookmark-button");
const closeFormButton = document.getElementById("close-form-button");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");

const viewCategoryButton = document.getElementById("view-category-button");
const closeListButton = document.getElementById("close-list-button");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");

const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const categoryList = document.getElementById("category-list");

const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    if (
      Array.isArray(bookmarks) &&
      bookmarks.every(
        (bookmark) =>
          bookmark !== null &&
          typeof bookmark === "object" &&
          !Array.isArray(bookmark) &&
          typeof bookmark.name === "string" &&
          typeof bookmark.category === "string" &&
          typeof bookmark.url === "string"
      )
    ) {
      return bookmarks;
    }

    return [];
  } catch {
    return [];
  }
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

const updateCategoryNames = () => {
  categoryNames.forEach((element) => {
    element.textContent = categoryDropdown.value;
  });
};

addBookmarkButton.addEventListener("click", () => {
  updateCategoryNames();
  displayOrCloseForm();
});

closeFormButton.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkButtonForm.addEventListener("click", () => {
  const bookmarks = getBookmarks();

  bookmarks.push({
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

const renderBookmarks = () => {
  const selectedCategory = categoryDropdown.value;
  const filteredBookmarks = getBookmarks().filter(
    (bookmark) => bookmark.category === selectedCategory
  );

  categoryList.innerHTML = "";

  if (filteredBookmarks.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  filteredBookmarks.forEach(({ name, url }) => {
    categoryList.innerHTML += `
      <div>
        <input type="radio" id="${name}" value="${name}" name="bookmark">
        <label for="${name}">
          <a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>
        </label>
      </div>
    `;
  });
};

viewCategoryButton.addEventListener("click", () => {
  updateCategoryNames();
  renderBookmarks();
  displayOrHideCategory();
});

closeListButton.addEventListener("click", () => {
  displayOrHideCategory();
});

deleteBookmarkButton.addEventListener("click", () => {
  const selectedBookmark = document.querySelector(
    'input[name="bookmark"]:checked'
  );

  if (!selectedBookmark) {
    return;
  }

  const selectedName = selectedBookmark.value;
  const selectedCategory = categoryDropdown.value;
  const bookmarks = getBookmarks();

  const bookmarkIndex = bookmarks.findIndex(
    (bookmark) =>
      bookmark.name === selectedName &&
      bookmark.category === selectedCategory
  );

  if (bookmarkIndex !== -1) {
    bookmarks.splice(bookmarkIndex, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  renderBookmarks();
});
