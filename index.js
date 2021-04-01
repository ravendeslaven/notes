const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


// Config
app.set('view engine', 'pug')

// Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Static Files
app.use('/public', express.static(__dirname + '/public'))


// Routes
let configRoutes = require('./routes/configRoutes')

app.use('/', configRoutes)
app.use('/notes', configRoutes)
app.use('/users', configRoutes)




// Server listen
app.listen(process.env.port || 3000)
console.log('Running at port 3000')



// Connect to a MongoDB server running on 'localhost:27017' and use the 'notes_db' database.
mongoose.connect('mongodb://localhost:27017/notes_db', {
  useNewUrlParser: true, // Boilerplate for Mongoose 5.x
  useUnifiedTopology: true
});

// Error DB handler
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:')) // Enlaza el track de error a la consola (proceso actual)
db.once('open', () => {
    console.log('Connected') // Si todo está ok, imprime esto
})

/*
// Data on db
const User = require('./models/userSchema')
const Note = require('./models/noteSchema')
//const Nota = mongoose.model('Notas', {name: String})

const user = new User({
    name: 'Juanxd', 
    password: 1236789, 
    email: 'juan@gmail.com'
})

const note = new Note({
    dia: 'Lunes',
    data_user: 'Estas son las actividades que debo realizar el día de hoy'
})    

user.save().then(() => console.log('Usuario Guardado'))
note.save().then(() => console.log('Nota Guardada'))
*/