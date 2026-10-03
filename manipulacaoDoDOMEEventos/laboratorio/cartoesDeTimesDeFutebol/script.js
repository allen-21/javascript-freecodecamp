const footballTeam = {
  team: "Mozambique",
  year: 2026,
  headCoach: "Chiquinho Conde",

  players: [
    {
      name: "Geny Catamo",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Domingues",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Reinildo Mandava",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Ivan Urrubal",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Witi",
      position: "forward",
      isCaptain: false
    }
  ]
};

const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

function displayPlayers(players) {
  playerCards.innerHTML = "";

  players.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const name = document.createElement("h2");
    name.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const position = document.createElement("p");
    position.textContent = `Position: ${player.position}`;

    card.appendChild(name);
    card.appendChild(position);

    playerCards.appendChild(card);
  });
}

displayPlayers(footballTeam.players);

playersDropdown.addEventListener("change", () => {
  const selectedPosition = playersDropdown.value;

  if (selectedPosition === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      (player) => player.position === selectedPosition
    );

    displayPlayers(filteredPlayers);
  }
});