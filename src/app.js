const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

const Music = require('./models/music.js')

const index_route = require('./routes/index.js')
const music_route = require('./routes/music.js')
//conexao com o banco
mongoose.connect('mongodb://127.0.0.1:27017/musics')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/', index_route)
app.use('/musics', music_route)

module.exports = app