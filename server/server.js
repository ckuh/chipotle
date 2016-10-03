const express = require('express')
const RRM = require('./helpers/RRM.js')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParse = require('body-parser')
require('./db')

const app = express()
app.set('port', process.env.PORT || 1337)

dotenv.load()
app.use(cors())
app.use(bodyParse.json())

app.use('/public', express.static('./public'))

app.use(RRM)

console.log('Listening on port ', app.get('port'))
app.listen(app.get('port'))
