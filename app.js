// const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// customize yargs version

yargs.version("1.1.0");

// create add command
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

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "remove note",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "listing all notes",
  handler(argv) {
    notes.listNotes(argv.title);
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "reading a note",
  builder: {
    title: {
      describe: "read all notes",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    notes.readNotes(argv.title);
  },
});
// add, remove , read, list out all notes

console.log(yargs.argv);
// yargs.parse();
