const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')                       // Set up view template

// Set up routes
const userRouter = require('./routes/users')

app.use('/users', userRouter)

// Logger Middleware
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

// Start server on port
app.listen(process.env.PORT || 3000)