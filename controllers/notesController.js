const cons = require('consolidate')
const mongoose = require('mongoose')


let Note = require('../models/noteSchema')
let notesController = {}


// List
notesController.list = (req, res) => {
    Note.find({}).exec((err, notes) => {
        if(err) {
            console.log('Error: ', err)
            return
        }
        console.log('The Index')
        res.render('../views/notes/index', {notes: notes})

    })
}



// Show
notesController.show = (req, res) => {
    Note.findOne({_id: req.params.id}).exec((err, notes) => {
        if(err) {
            console.log(`Error ${err}`)
            return
        }
        res.render('../views/notes/show', {notes: notes})
    })
}

// Create
notesController.create   = (req, res) => {
    res.render('../views/notes/create')
}

notesController.save = (req, res) => {
    let note = new Note(req.body)

    note.save((err) => {
        if(err) {
            console.log(`Error ${err}`)
            return
        }
        console.log('Addeds succesfully')
        //res.send('Fine, note is added')
        res.redirect(`/notes/show/${note._id}`)
    })
}


// Edit
notesController.edit = (req, res) => {
    Note.findById({_id: req.params.id}).exec((err, note) => {
        if(err) {
            console.log(`Error ${err}`)
        }
        res.render('../views/notes/edit', {note: note})
    })
}


// Update
notesController.update = (req, res) => {
    Note.findByIdAndUpdate(req.params.id, {$set: {
        dia: req.body.dia,
        data_user: req.body.data_user
    }}, {new: true}, (err, note) => {
        if(err) {
            console.log(`Error ${err}`)
            res.render('../views/notes/edit', {note: req.body})
        }
        res.redirect(`/notes/show/${note._id}`)
        console.log('Updated Succesfully')
    })
}

// Delete
notesController.delete = (req, res) => {
    Note.remove({_id: req.params.id}, (err) => {
        if(err) {
            console.log(`Error ${err}`)
        }
        console.log('Delete succesfuly')
        res.redirect('/notes')
    })
}
module.exports = notesController