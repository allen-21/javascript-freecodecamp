const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }
  unpin(idea) {
    this.ideas = this.ideas.filter((item) => item !== idea);
  }

  count() {
    return this.ideas.length;
  }
  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;

    for (const idea of this.ideas) {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    }
    return result;
  }
}

const board = new ProjectIdeaBoard("Casa");
const a = new ProjectIdea("Pintar", "paredes");
const b = new ProjectIdea("Limpar", "janelas");

board.pin(a);
board.pin(b);
b.updateProjectStatus(projectStatus.SUCCESS);

console.log(board.count());
console.log(JSON.stringify(board.formatToString()));