const mongoose = require('mongoose')
const Schema = mongoose.Schema
const time = require('../libs/timeLib')

const Recover = new Schema({
userId:{
  type:String
},
email: {
    type: String
  },
  authToken: {
    type: String
  },
  tokenSecret: {
    type: String
  },
  tokenGenerationTime: {
    type: Date,
    default: time.now()
  }
})

module.exports = mongoose.model('Recover', Recover)