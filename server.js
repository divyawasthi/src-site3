const express = require('express');
// const sendMail = require('./mail');
const log = console.log;
const app = express();
const path = require('path');
// const router = express.Router();
const PORT = 8080;
const sendMail = require('./mail')
const chemjeo = require('./chemjeo')
const k12 = require('./k12')
const solo = require('./solo')
const work = require('./workshop')
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
  const {name,emailid,phone,whatsapp,college,admin_no,tshirt,chapter_name,src_id,aiche_id,transaction_id} = req.body
  sendMail(name,emailid,phone,whatsapp,
      college,admin_no,tshirt,chapter_name,src_id,aiche_id,transaction_id,(err,data)=>{
        if (err){
          res.status(500).join({message:'internal Error'})
        }
        else{alert({message:'email sent'})}
      }
    )
  res.json({message:'message received'})
})
app.post('/jeo_email',(req,res)=>{
  const {
    college,
    teamname,Leadername,phone1,emailid1,srcid1,
    name2,phone2,emailid2,srcid2,
    name3,phone3,emailid3,srcid3,
    name4,phone4,emailid4,srcid4,event

  } = req.body ;
  chemjeo(
    college,
    teamname,Leadername,phone1,emailid1,srcid1,
    name2,phone2,emailid2,srcid2,
    name3,phone3,emailid3,srcid3,
    name4,phone4,emailid4,srcid4,event,(err,data)=>{
      if (err){res.status(500).join({message:'internal Error'})}
      else{alert({message:'email sent'})}
    }
  )


})
app.post('/k12_email',(req,res)=>{
  const {
    college,
    teamname,Leadername,phone1,emailid1,srcid1,
    name2,phone2,emailid2,srcid2,
    name3,phone3,emailid3,srcid3,
    name4,phone4,emailid4,srcid4,description,category

  } = req.body ;
  k12(
    college,
    teamname,Leadername,phone1,emailid1,srcid1,
    name2,phone2,emailid2,srcid2,
    name3,phone3,emailid3,srcid3,
    name4,phone4,emailid4,srcid4,description,category,(err,data)=>{
      if (err){res.status(500).join({message:'internal Error'})}
      else{alert({message:'email sent'})}
    }
  )


})
app.post('/solo_event',(req,res)=>{
  const {
    college,name,srcid,phone,emailid,title,event
  } = req.body ;
  // console.log(req.body)
  solo(
    college,name,srcid,phone,emailid,title,event,(err,data)=>{
      if (err){res.status(500).join({message:'internal Error'})}
      else{alert({message:'email sent'})}
    }
  )


})


app.post('/workshop',(req,res)=>{
  const {college,name,srcid,phone,emailid,event} = req.body 
  work(college,name,srcid,phone,emailid,event,(err,data)=>{
    if (err){res.status(500).join({message:'internal Error'})}
    else {alert({message:'email sent'})}
  })
})
// app.get('/form/forms.html',(req,res)=>{console.log('from backend');res.sendFile(path.join(__dirname,'../form','forms.html'))})


// app.get("/sendemail",sendMail)

app.listen(PORT, () => log('Server is starting on PORT,', 8080));