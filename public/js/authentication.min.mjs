"use strict";
const PASSWORD_INPUT=document.querySelector("main > .login > .row > .login-wrapper form input#password");
window.addEventListener("click",t=>{if(t.target.matches(".fa-eye-slash")){console.log(PASSWORD_INPUT);
let e="password"===PASSWORD_INPUT.getAttribute("type")?"text":"password";PASSWORD_INPUT.setAttribute("type",e)}});


document.getElementById("register-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve the form data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const birthdate = document.getElementById("birthdate").value;

    // Perform validation for empty fields
    if (email === "" || password === "" || confirmPassword === "" || firstname === "" || lastname === "" || phone === "" || birthdate === "") {
        // Display an error message or handle the validation failure as desired
        alert("Please fill in all required fields.");
        return;
    }

    // Perform validation for password match
    if (password !== confirmPassword) {
        // Display an error message or handle the password mismatch as desired
        alert("Passwords do not match. Please check and try again.");
        return;
    }

    // Perform any additional validation or processing of the form data here

    // Set the form data as the value of hidden fields in the form
    document.getElementById("email").value = email;
    document.getElementById("password").value = password;
    document.getElementById("firstname").value = firstname;
    document.getElementById("lastname").value = lastname;
    document.getElementById("phone").value = phone;
    document.getElementById("birthdate").value = birthdate;

    // Submit the form programmatically
    document.getElementById("register-form").submit();
});