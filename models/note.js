var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var noteSchemaOptions = {timestamps: true};

var NoteSchema = new Schema({
	text: {
		type: String,
		required: true,
	}
}, noteSchemaOptions);

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;