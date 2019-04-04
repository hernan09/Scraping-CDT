const express = require('express')
const mongoose= require('mongoose')
const scraping = require('./scraping')


const app = express()

let port = process.env.PORT || 4000



mongoose.connect('mongodb://localhost:27017/scrap', { useNewUrlParser: true },(err)=>{
  if(err) console.log(err)

  console.log('connectte to database')
  
  app.listen(port,(err)=>{
    if(err) console.log(err)
    console.log(`http://localhost:${port}`)
  })
})




