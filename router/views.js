const express = require('express')
const app = express()

const path = require('path')
const router = express.Router()


router.get('/image_1',(req,res)=>{
  res.render('file.ejs')
})
module.exports= router;