const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fakeListing');

app.use(express.static(path.join(__dirname, '../client', 'dist')))

app.get('/', (req, res) => { res.send('hello!!') }),

app.listen(PORT, (console.log(`Server is listening on port ${PORT}`)));

