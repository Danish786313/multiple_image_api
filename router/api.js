const express = require('express')
const app = express()
const imagecontroller = require('../constroller/imagecontroller')
const testcontroller = require('../constroller/testcontroller')

const router = express.Router()

router.post('/image', imagecontroller.upload.array('demo_image',7), testcontroller.test)


module.exports= router;