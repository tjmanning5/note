var Note = require(ROOT + '/models/note.js');

module.exports = function (app) {

    app.post('/note', function (req, res) {

        var NewNote = { text: 'AJAXPlaceholder' };

        Note.create(NewNote, function (err, results) {

            res.send(results);
            
            console.log('Post Successful!')
        });

    });

    app.get('/note/:id', function (req, res) {

        Note.findOne({ _id: req.params.id }, function (err, note) {

            if (err) throw err;

            res.send(note);
        });
    });

    app.delete('/note/:id', function (req, res) {

        Note.deleteOne({ _id: req.params.id }, function (err, note) {

            if (err) throw err;

            res.send('Post Successfully Removed');

            console.log('Your post has been removed.');

        });

    });

    app.get('/notes/', function(req, res) {
        Note.find({}, function(err, note){})
    })

}