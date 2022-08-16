const express = require('express')
const app = express()
const ejs = require('ejs')
const views = require('./router/views')
const api  = require('./router/api')

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded(
//     {
//         extended:true
//     }
// ));
app.use('/views',views)
app.use('/api', api) 


app.listen(3400, async () =>{
    // await sequelize.sync()
    console.log("DataBase sync")
})

