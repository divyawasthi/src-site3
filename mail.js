const nodemailer = require('nodemailer')
// const mailGun = require('nodemailer-mailgun-transport')



  
  



// module.exports = sendMail;

// const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (name,emailid,phone,whatsapp,college,admin_no,tshirt,chapter_name,src_id,aiche_id) => {
  let testaccount = nodemailer.createTestAccount()
  let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
      user:'contact.src.svnit@gmail.com',
      pass:'lpfejxpvfsfsddnr',

    }
  })
  transporter.sendMail({
    from:'contact.src.svnit.@gmail.com',
    to:emailid,
    subject:'SRC-23 Registration',
    text:`
    Dear ${name}
    Thank you for registering for Synergicon 2023! We are thrilled to have you on board and look forward to your participation in this exciting event.
    Your registration confirmation is now complete, and we are delighted to count you as one of our valued participants.
    Your SRC ID is ${src_id}.
    Your form details are as shown below:
    Name:${name}
    Email : ${emailid}
    Phone:${phone}
    Whatsapp contact:${whatsapp}
    College:${college}
    Admission number:${admin_no}
    Tshirt-size:${tshirt}
    AIChe-chaptername:${chapter_name}
    As the event draws nearer, we will be sharing additional details, including the agenda, speaker profiles, and any important updates. We encourage 
    you to keep an eye on your inbox for future communication from our team. Should you have any questions or require assistance leading up to the event, 
    please do not hesitate to reach out to us.

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
module.exports = sendMail;