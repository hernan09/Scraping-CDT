const Xray = require('x-ray')
const xray = new Xray()
const obj = require('./model')


xray('http://asp3.clickexperts.net/mailtrack3/view/899/288/11633', 'div:nth-child(8)', [{
  title: 'a',
  body: 'p:nth-child(2)',
  img: 'img@src'
}])(function objeto(err, results) {
  results.map((result, i) => {
   

    let obj2 = new obj({
      title:result.title,
      body:result.body,
      img:result.img

    })
    obj2.save((err)=>{
      if(err){console.log(err)
      }else{
        console.log(obj2)
      }
    })
  })
})