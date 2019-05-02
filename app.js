const express = require('express')
const bodyParser = require('body-parser')   
const app = express()
const passport = require('./config/passport')


app.use(bodyParser.json())
app.use(passport().initialize())

app.use(express.static('public'))

require('./src/controllers/auth')(app)
require('./src/controllers/user')(app)


module.exports = app