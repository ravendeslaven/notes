const mongoose = require('mongoose')

let User = require('../models/userSchema')
let usersController = {}


// List
usersController.list = (req, res) => {
    User.find({}).exec((err, user) => {
        if(err) {
            console.log(`Error ${err}`)
        }
        console.log('Show list users success')
        res.render('../views/users/index', {user: user})
    })
}

// Show
usersController.show = (req, res) => {
    User.findOne({_id: req.params.id}).exec((err, user) => {
        if(err) {
            console.log(`Error ${err}`)
        }
        console.log('Show users succesfully')
        res.render('../views/users/show', {user: user})
    })
}



// Create
usersController.create = (req, res) => {
    res.render('../views/users/create')
}

usersController.save = (req, res) => {
    let user = new User(req.body)
    user.save((err) =>{
        if(err) {
            console.log(`Error ${err}`)
            return
        }
        console.log('Added on DB')
        res.redirect(`/user/show/${user._id}`)
    })
}

// Edit
usersController.edit = (req, res) => {
    User.findBydId({_id: req.params.id}).exec((err, user) => {
        if(err) {
            console.log(`Error ${err}`)
        }
        res.render('../views/users/edit', {user: user})
    })
}


// Update
usersController.update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set: {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }}, {new: true}, (err, user) => {
        if(err) {
            console.log(`Error ${err}`)
            res.render('../views/users/edit', {user: req.body})
        }
        res.redirect(`/users/show/${user._id}`)
        console.log('Updated Succesfully')
    })
}


// Delete
usersController.delete = (req, res) => {
    User.remove({_id: req.params.id}).exec((err, user) => {
        if(err) {
            console.log(`Error ${err}`)
        }
        console.log('Deleted succesfully')
        res.redirect('/users')
    })
}


module.exports = usersController