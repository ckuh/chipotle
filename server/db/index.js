const mongoose = require('mongoose')
const moment = require('moment')

mongoose.Promise = require('q').Promise

require('dotenv').config()

const dbURL = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds033046.mlab.com:33046/chris_portfolio'

const db = mongoose.connection

mongoose.connect(dbURL)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('[' + moment().format('hh:mm:ss') + ']' + ' Database connection established')
})

module.exports = db
