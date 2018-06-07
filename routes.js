var NoteModel = require('./models/note.js');

module.exports = function(app) {

	app.get('/', function (req, res) {
		NoteModel
			.find({}, function(err, results) {
				
				if (err) {
					console.log(err);
					res.status(500);
					res.end();
					return;
				}
				
				res.send(results);
				console.log('bitchin');
			});
	});

};