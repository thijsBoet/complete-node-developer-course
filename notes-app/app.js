const yargs = require("yargs");
const fs = require("fs");
const chalk = require("chalk");
const notes = require("./notes.js");

yargs.version("1.1.0");

// Add Note command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Remove Note command
yargs.command({
  command: "rm",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
});

// List Notes command
yargs.command({
  command: "ls",
  describe: "List your notes",
  builder: {},
  handler() {
    notes.listNotes();
  },
});

// Read Note command
yargs.command({
  command: "rd",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read a Note",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
});

yargs.parse();
