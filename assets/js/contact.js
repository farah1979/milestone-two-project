// validation Message
(function () {
    var validate = document.querySelectorAll(".needs-validation");
  
    Array.prototype.slice.call(validate).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
  
                form.classList.add("was-validated");
            },
            false
        );
    });
  })();
  
  //initialize Emailjs and getting information from form by Emailjs
  
  (function() {
      emailjs.init("user_POEdj6itAaMNgwxGUgTJY");
  })();
  
  
  function sendMail(contactForm) {
    emailjs
        .send("gmail", "sweden", {
            from_firstname: contactForm.fName.value,
            from_lastname: contactForm.lName.value,
            from_username: contactForm.validationCustomUsername.value,
            from_email: contactForm.emailaddress.value,
            message: contactForm.message.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
  }
  
  let form = document.getElementsByClassName("form-contact");
  form.addEventListener('submit', function submitForm (event) {
    event.preventDefault();
    form.reset();
  });