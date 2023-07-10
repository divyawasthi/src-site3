const nodemailer = require('nodemailer')


const chemjeo = (
    college,
    teamname,Leadername,phone1,emailid1,srcid1,
    name2,phone2,emailid2,srcid2,
    name3,phone3,emailid3,srcid3,
    name4,phone4,emailid4,srcid4,event
) => {
  let testaccount = nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
      user:'contact.src.svnit@gmail.com',
      pass:'lpfejxpvfsfsddnr',

    }
  })
  const maillist = `${emailid1},${emailid2},${emailid3},${emailid4}`
  transporter.sendMail({
    from:'contact.src.svnit.@gmail.com',
    to:maillist,
    subject:`${event} Registration`,
    text:`
    Thank you for registering for ${event}.
    We are thrilled to have you on board and look forward to your 
    participation in this exciting event. Your registration 
    confirmation is now complete, and we are delighted to count 
    your team .
    Your team details are as shown below:
    College : ${college}
    Team Name : ${teamname}
    Team : 
        ${srcid1} - ${Leadername}
        ${srcid2} - ${name2}
        ${srcid3} - ${name3}
        ${srcid4} - ${name4}
        
    As the event draws nearer, we will be sharing additional details, 
    including the agenda, speaker profiles, and any important updates. 
    We encourage you to keep an eye on your inbox for future 
    communication from our team. Should you have any questions or 
    require assistance leading up to the event, please do not hesitate 
    to reach out to us.
    Best Regards,
    AIChE ChES SVNIT
    
    `,
    html:''
  },function(error,info){
    if (error){console.log(error)}
    else {console.log(info.response)}
  })
// Exporting the sendmail

}
module.exports = chemjeo;