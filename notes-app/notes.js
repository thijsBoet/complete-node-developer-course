const fs = require("fs");
const chalk = require("chalk");


const createLine = (title, additionalChars) => {
  let string = "";
  for (let i = 0; i <= title.length + additionalChars; i++) {
    string += "-";
  }
  return string;
};


const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(
      chalk.green.inverse`New note named ${title} added!\n${createLine(
        title,
        15
      )}\n${body}`
    );
  } else {
    console.log(chalk.red.inverse`Note title: ${title} already taken!`);
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length !== notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse`${title} removed from list.`);
  } else {
    console.log(
      chalk.red.inverse`${title} not found!\nPlease check your input.`
    );
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.white.inverse`Your Notes\n----------`);

  notes.forEach((note) => {
    console.log(chalk.white.inverse`${note.title}`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => {
    if (note.title === title) {
      return note;
    }
  });

  note === undefined
    ? console.log(chalk.red.inverse(`${title} not found!\nPlease check your input.`))
    : console.log(chalk.yellow.inverse`Title: ${note.title}\n${createLine(title, 6)}\n${note.body}`);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {  addNote, removeNote, listNotes, readNote };
