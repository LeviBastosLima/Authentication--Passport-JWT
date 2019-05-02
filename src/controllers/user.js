const express = require('express')
const router = express.Router()
const { User }  = require('../models')
const passport = require('../../config/passport')


router.post('/create', (req, res, next) => User.create(req.body).then(() => {
    console.log(req.body)
    res.redirect('/accounts/list')
}))

router.get('/list',(req, res, next) => User.findAll().then(projects => {
    res.send(projects)
}))

router.get('/detail/:id', (req, res, next) => User.findByPk(req.params.id).then(project => {
    console.log(req.params.id)
    res.send(project)
}))

router.put('/update/:id', (req, res, next) => User.findByPk(req.params.id).then(project =>{
    project.update(req.body).then(project => res.send(project))
}))

router.delete('/delete/:id', (req, res, next) => User.findByPk(req.params.id).then(project =>{
    project.destroy().then(() => res.send('Deletado'))
}))


module.exports = app => app.use('/accounts', passport().authenticate() ,router)