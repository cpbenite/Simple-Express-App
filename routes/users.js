const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((req, res) => { 
        res.send('user list') 
    })
    .post((req, res) => {
        const isValid = true
        if (isValid) {
            users.push({ firstName: req.body.firstName })
            res.redirect(`/users/${users.length-1}`)
        } else {
            console.log('Error')
            res.render('users/new', { firstName: req.body.firstName })
        }
    })

router.get('/new', (req, res) => {
    res.render('users/new', {
        firstName: 'Test'
    })
})

// GET, UPDATE, DELETE user id
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })

const users = [{name: 'Kyle'}, {name: 'Sally'}]

// Middleware that runs before API
router.param('id', (req, res, next, id) => {
    next()
})

module.exports = router

