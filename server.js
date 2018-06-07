ROOT = __dirname;

require('dotenv-safe').config();

const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URL;

MongoClient.connect(url, function(err, db) {
	console.log('Mongo connection successful');
});

const port = process.env.PORT || 3000;

const routes = require('./routes.js')(app);

app.listen(port, () => console.log(`Server running on port ${port}`));