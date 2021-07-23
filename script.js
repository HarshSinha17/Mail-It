 function send(){
//Getting these values from HTML
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var body = document.getElementById("body").value;

//Checking if the input items are valid or not
  if(email.includes(".com") && email.includes("@") && subject!=="" && body!==""){
   //Send the Mail
    sendEmail(email,subject,body);
  }
  else{
    alert("You need to Fill all the Input areas with Valid Info to send the Mail!")
  }
}

//Function for sending the Mail
function sendEmail(email,subject,body) {
 Email.send({
  Host: "smtp.gmail.com",
  Username: "u.emailjavascript@gmail.com",
  Password: "khushi@24",
  To: email,
  From: "u.emailjavascript@gmail.com",
  Subject: subject,
  Body: body,
  })
.then(function () {
   window.location.assign("success.html")
})
}

