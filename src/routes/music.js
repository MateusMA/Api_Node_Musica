const express = require('express')
const router = express.Router()
const controller = require('../controllers/music-controller.js')

<<<<<<< HEAD
router.get('/', controller.get)
router.get('/:titulo', controller.getByTitle)
router.get('/tags-search/:tag', controller.getByTag)
router.post('/', controller.post)
router.put('/:_id', controller.put)
router.delete('/:_id', controller.delete)
>>>>>>> 809c66fd89003f1b4d49f4c02c9466d0a2e624ad

module.exports = router