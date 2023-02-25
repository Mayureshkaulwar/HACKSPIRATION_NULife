const express = require('express')
const app = express()
const body_parser = require("body-parser")



const port = process.env.PORT || 4000
const dbConnection = require('./db')
app.use(express.json())

app.use('/api/organs/' , require('./routes/organRoute'))



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))