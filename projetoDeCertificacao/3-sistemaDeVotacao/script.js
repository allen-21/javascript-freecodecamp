const poll = new Map();
const addOption = (option) => {
  if (!option) {
    return `Option cannot be empty.`;
  }

  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
};

const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
};
addOption("Turkey");
addOption("Morocco");
addOption("Portugal");

vote("Turkey", 101);
vote("Turkey", 102);
vote("Morocco", 103);

const displayResults = () => {
  let results = "Poll Results:";

  for (const [option, voters] of poll) {
    results += `\n${option}: ${voters.size} votes`;
  }

  return results;
};

console.log(displayResults());
