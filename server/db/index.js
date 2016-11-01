const mongoose = require('mongoose')
const moment = require('moment')

mongoose.Promise = require('q').Promise

require('dotenv').config()

const dbURL = process.env.PORT ? 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds049456.mlab.com:49456/chipotle' : 'mongodb://localhost/chipotle'

const db = mongoose.connection

mongoose.connect(dbURL)

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function () {
  console.log('[' + moment().format('hh:mm:ss') + ']' + ' Database connection established')
})
