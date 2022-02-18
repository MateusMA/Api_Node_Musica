const mongoose = require('mongoose')
const Music = mongoose.model('Music')

<<<<<<< HEAD
exports.get = (req, res, next) => {

	Music.find({}, 'titulo artista ano album album_foto').then(data => {
		res.status(200).send(data)
	}).catch(e => {
		res.status(404).send(e)
	})

}

exports.getByTitle = (req, res, next) => {

	Music.findOne({ titulo: req.params.titulo }, 'titulo artista ano album album_foto tags').then(data => {
		res.status(200).send(data)
	}).catch(e => {
		res.status(404).send(e)
	})

}

exports.getByTag = (req, res, next) => {

	Music.find({ tags: req.params.tag }, 'titulo artista ano album album_foto tags').then(data => {
		res.status(200).send(data)
	}).catch(e => {
		res.status(404).send(e)
	})

}
exports.post = (req, res, next) => {

	var musicInst = new Music()
	musicInst._id = req.body._id
	musicInst.titulo = req.body.titulo
	musicInst.artista = req.body.artista
	musicInst.ano = req.body.ano
	musicInst.tags = req.body.tags
	musicInst.album = req.body.album
	musicInst.album_foto = req.body.album_foto

	musicInst.save().then(x => {
		res.status(201).send(
			{ message: 'Agora essa música faz parte de nosso acervo, obrigado pela sua contribuição!' })
	}).catch(e => {
		res.status(400).send(
			{ message: 'Ops, parece que algo deu errado', data: e })
	})


}

exports.put = (req, res, next) => {

<<<<<<< HEAD
	Music.findByIdAndUpdate(req.params._id, {
		$set: {
			titulo: req.body.titulo,
			tags: req.body.tags,
			ano: req.body.ano,
			artista: req.body.artista,
			album: req.body.album,
			album_foto: req.body.album_foto
		}
	}).then(x => {
		res.status(200).send(
			{ message: 'A musica foi atualizada!' })
	}).catch(e => {
		res.status(400).send(
			{ message: 'Ops, falha ao atualizar', data: e })
}

exports.delete = (req, res, next) => {
<<<<<<< HEAD
	Music.findOneAndRemove(req.params._id)
	.then(x => {
		res.status(200).send(
			{ message: 'Essa musica foi apagada :(' })
	})
	.catch(e => {
		res.status(400).send(
			{ message: 'falha ao deletar', data: e })
	})
>>>>>>> 809c66fd89003f1b4d49f4c02c9466d0a2e624ad
}