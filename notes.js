// const chalk = require("chalk");
// import { green, red } from "chalk";
const fs = require("fs");

const getNote = () => {};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("note added sucessfully");
  } else {
    console.log("note title taken");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > duplicateNotes.length) {
    console.log("Note removed");
  } else {
    console.log("Note does not exist");
  }
  saveNotes(duplicateNotes);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log("your notes: ");
  console.log("---------");

  notes.forEach((note) => {
    console.log(note.title);
    console.log("---------");
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote) {
    console.log(`title: ${duplicateNote.title}`);
    console.log(`body:  ${duplicateNote.body}`);
  } else {
    console.log("error ");
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson, "utf8");
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
