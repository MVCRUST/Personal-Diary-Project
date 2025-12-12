const express = require('express');
const cors = require('cors');
const path = require("path");

const diaryEntriesRouter = require('./server/routers/diaryEntries');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/diaryEntries', diaryEntriesRouter);
app.use(express.static(path.join(__dirname)))

module.exports = app;