const mongoose = require('mongoose')
const Music = mongoose.model('Music')

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

	// O id pode ser preenchido na rota quando a função for chamada
	const id = req.params.id

	res.status(200).send({
		id: id,
		item: req.body
	})

}

exports.delete = (req, res, next) => {

	const id = req.params.id

	res.status(201).send(req.body)
}