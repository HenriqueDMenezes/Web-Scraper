const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();

url = 'https://www.theguardian.com/international'

axios(url)
  .then(response=>{
   const html =  response.data
   const $ = cheerio.load(html)
   const artigos = [];


   $('.fc-item__title',html).each(function(){

     const title = $(this).text()
     const url = $(this).find('a').attr('href')
      artigos.push({
        title,
        url
      })
    })
    console.log(artigos)
  }).catch(err => console.log(err))
app.listen(PORT,()=>console.log(`server running on PORT ${PORT}`))