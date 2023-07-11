document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get values from form inputs
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  
  // EmailJS configuration
  emailjs.init('1t10z70Sw2ijT66uf');
  
  // Send email
  emailjs.send("service_wuhpykt", "template_9e6185a",{
    name: name,
    email: email,
    number: number,
    subject: subject,
    message: message
  })
  .then(function(response) {
    alert("Email sent successfully!");
    // Clear form inputs
    document.getElementById("contact-form").reset();
  }, function(error) {
    console.error("Email sending failed:", error);
  });
});