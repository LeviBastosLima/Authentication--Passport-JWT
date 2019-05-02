const express = require('express')
const router = express.Router()
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const cfg = require('../../config/config')

router.post('/login', (req, res) => User.findOne({where: {email: req.body.email}}).then(project => {
    if(req.body.password == project.password){
        const payload = project.id
        const token = jwt.sign({id: payload}, cfg.jwtSecret, {expiresIn: 120})
        res.json({token: token})
    } else {
        res.sendStatus(401)
    }
}))

module.exports = app => app.use('/auth', router)