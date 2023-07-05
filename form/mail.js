const firebaseConfig = {
  //   copy your firebase config informations
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
    apiKey: "AIzaSyAauEtkjji8-xhaMlMVFRpFaWzv89GtpG0",
    authDomain: "src-site.firebaseapp.com",
    databaseURL: "https://src-site-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "src-site",
    storageBucket: "src-site.appspot.com",
    messagingSenderId: "270379637612",
    appId: "1:270379637612:web:e3d3c9732e4dea1be8f149",
    measurementId: "G-8CJYTS9F0E"
  

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
