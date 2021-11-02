const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express')

const app = express()

url = 'https://www.amazon.com.br/'

axios(url)
  .then(response=>{
   const html =  response.data
   const $ = cheerio.load(html)
   const valores = [];
   $('.a-box-group',html).each(function(){

     const text = $(this).text()
     const preco = $(this).find('.a-price a-text-price a-size-medium').attr('a-offscreen')
      valores.push({
        text,
        preco
      })
    })
    console.log(valores)
  }).catch(err => console.log(err))
app.listen(PORT,()=>console.log(`server running on PORT ${PORT}`))