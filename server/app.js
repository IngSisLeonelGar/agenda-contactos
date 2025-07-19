// server/app.js
const express = require('express');
const cors = require('cors');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRoutes);

module.exports = app;
