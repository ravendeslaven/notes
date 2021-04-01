const express = require('express')
const router = express.Router()


// Config route index
router.get('/', (req, res) => {
    res.render('index')
})



// Config routes for notes
let notes = require('../controllers/notesController.js')

router.get('/notes', notes.list)
router.get('/show/:id', notes.show) // View items into the collection with her id
router.get('/create', notes.create)
router.post('/note/save', notes.save) // Use POST method to save 
router.post('/edit/:id', notes.edit)
router.post('/update/:id', notes.update)
router.post('/delete/:id', notes.delete)



// Config routes of users
let users = require('../controllers/usersController')

router.get('/users', users.list)
router.get('/user/show/:id', users.show)
router.get('/user/create', users.create)
router.post('/user/save', users.save)
router.post('/user/edit/:id', users.edit)
router.post('/user/update/:id', users.update)
router.post('/user/delete/:id', users.delete)


module.exports = router