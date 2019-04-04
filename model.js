const mongose = require('mongoose')

const Schema = mongose.Schema

let obj = new Schema({
  title:{type: String},
  body:{type: String},
  img: {type: String}
})

module.exports = mongose.model('obj',obj)