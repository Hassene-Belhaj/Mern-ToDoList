const express = require('express');

const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.listen('5174' , () => console.log("server is ok"))