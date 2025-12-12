const express = require('express');
const cors = require('cors');
const diaryEntriesRouter = require('./server/routers/diaryEntries');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/diaryEntries', diaryEntriesRouter);

module.exports = app;