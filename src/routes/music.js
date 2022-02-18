const express = require('express')
const router = express.Router()
const controller = require('../controllers/music-controller.js')

router.get('/', controller.get)
router.get('/:titulo', controller.getByTitle)
router.get('/tags-search/:tag', controller.getByTag)
router.post('/', controller.post)
router.put('/:_id', controller.put)
router.delete('/:_id', controller.delete)

module.exports = router