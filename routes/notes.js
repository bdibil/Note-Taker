const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the Notes
notes.get('/', (req, res) => {
  readFromFile('./db/notes_db.json').then((data) => res.json(JSON.parse(data)));
});


// POST Route for Notes API   to Save a New note
notes.post('/', (req, res) => {
  
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    if (title && text) {
      const newNote = {
        title,
        text,
      };

//   writeToFile('./db/db.json', req.body)
  
  readAndAppend(newNote, './db/notes_db.json')
  console.log(req.body);
  console.log(typeof (newNote));
  res.json(`${req.method} request received  @ API notes`)

    } else {
      res.json('Error in posting Note');
    }

});


module.exports = notes;
