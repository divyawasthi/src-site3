const express = require('express');
// const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');
// const router = express.Router();
const PORT = 8080;
const sendMail = require('./mail')
// const firebase = require("firebase-admin")
// const firebase = require('firebase')
// const file = require('../index.html')
// import firebase from 'firebase'


// app.use('..',express.static(path.join(__dirname,'.')))
app.use(express.static(path.join(__dirname,'.')))
app.use(express.static(path.join(__dirname,'./form')))
app.use(express.urlencoded({
  extend:false
}))
app.use(express.json())
// app.get('/',(req,res)=>{
//   // res.send('i am server')
//   res.sendFile(path.join(__dirname,'./','index.html'))
// })

app.post('/email',(req,res)=>{
  // console.log('data:',req.body)
  const {name,emailid,phone,whatsapp,college,admin_no,tshirt,chapter_name,src_id} = req.body
  sendMail(name,emailid,phone,whatsapp,
      college,admin_no,tshirt,chapter_name,src_id, (err,data)=>{
        if (err){
          res.status(500).join({message:'internal Error'})
        }
        else{alert({message:'email sent'})}
      }
    )
  res.json({message:'message received'})
})
// app.get('/form/forms.html',(req,res)=>{console.log('from backend');res.sendFile(path.join(__dirname,'../form','forms.html'))})


// app.get("/sendemail",sendMail)

app.listen(PORT, () => log('Server is starting on PORT,', 8080));