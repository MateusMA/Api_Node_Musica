const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Instanciando a classe Schema
const schema_music = new Schema({
	_id: {
		type: Number,
		required: true
	},
	titulo: {
		type: String,
		required: true,
		unique: true
	},
	artista: {
		type: String,
		required: true
	},
	ano: {
		type: Number,
		required: true
	},
	tags: [{
		type: String,
		required: true
	}],
	album: {
		type: String,
		required: true
	},
	album_foto: {
		type: String,
		required: true
	}
})

module.exports = mongoose.model('Music', schema_music)