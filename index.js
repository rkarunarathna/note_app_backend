const express = require('express')
const mysql = require('mysql2')
var bodyParser=require('body-parser')
const path = require('path');
const app = express()
const port = 3000

// Serve static images from the 'assets' folder
app.use('/images', express.static(path.join(__dirname, 'assets')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const user=require('./routes/login-route');
app.use('/api/users',user)

const notes=require('./routes/notes-route')
app.use('/api/notes',notes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})