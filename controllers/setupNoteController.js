var Note = require(ROOT + '/models/note.js');

module.exports = function (app) {

    app.get('/user/notes', function (req, res) {
        var starterNote = [
            {
                text: 'Sample text'
            }

        ];
        Note.create(starterNote, function(err, results) {
            res.send(results);
        });

    });

}