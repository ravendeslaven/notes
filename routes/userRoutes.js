const express = require('express')
const router = express.Router()

let users = require('../controllers/usersController')

const {notes} = require('../routes/noteRoutes')
const {index} = require('../routes/indexRoutes')

// User Routes
router.get('/users', users.list)
router.get('/show/:id', users.show)
router.get('/create', users.create)
router.post('/user/save', users.save)
router.post('/edit/:id', users.edit)
router.post('/update/:id', users.update)
router.post('/delete/:id', users.delete)



module.exports = router