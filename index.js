const express = require('express')
const cors = require('cors')
const App = express()
const router = require('./router')
const port = 2917

App.use(express.json())
App.use(cors())
App.use(express.urlencoded({ extended: true }))

App.get('/', (req, res) => {
    res.send('hello')
})

App.use(router)
App.listen(port, () => {
    console.log(`http://locahost:${port}`);
})