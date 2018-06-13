ROOT = __dirname;

require('dotenv-safe').config();

const express = require('express');
const app = express();

app.use(express.static('public'));

// const MongoClient = require('mongodb').MongoClient;
// const url = process.env.MONGODB_URL;

// MongoClient.connect(url, function(err, db) {
// 	console.log('Mongo connection successful');
// });

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const port = process.env.PORT || 3000;

const routes = require('./controllers/apiController.js')(app);
const setup = require('./controllers/setupNoteController.js')(app);

app.listen(port, () => console.log(`Server running on port ${port}`));