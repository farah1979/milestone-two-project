// validation Message 
(function () {
    
      var validate = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(validate)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



//Contact Emailjs with website

  function sendMail(contactForm) {

    
    emailjs.send("gmail", "sweden", {
        "from_firstname": contactForm.fName.value,
        "from_lastname": contactForm.lName.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; 
      };