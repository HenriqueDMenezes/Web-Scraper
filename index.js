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
  })
app.listen(PORT,()=>console.log(`server running on PORT ${PORT}`))