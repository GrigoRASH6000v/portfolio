require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.end('<h1>home page</h1>')
})

app.listen(PORT, ()=> {
    console.log('Server has been started')
})