const DiaryEntry = require("../models/DiaryEntry");

//index function 
async function index(req, res) {
  try {
    const entries = await DiaryEntry.getAll();
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Show function 

async function show(req, res) {
  try {
    const id = req.params.id;
    const entry = await DiaryEntry.getOneById(id);
    res.status(200).json(entry);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

// create function 
async function create(req, res) {
  try {
    const data = req.body;
    const newEntry = await DiaryEntry.create(data);
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update function 
async function update(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;

    const entry = await DiaryEntry.getOneById(id);
    const result = await entry.update(data);

    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

//Destroy (delete) function
async function destroy(req, res) {
  try {
    const id = req.params.id;

    const entry = await DiaryEntry.getOneById(id);
    await entry.destroy();

    res.status(204).end();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

module.exports = { index, show, create, update, destroy };

