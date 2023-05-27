"use strict";

const PASSWORD_INPUT = document.querySelector("main > .login > .row > .login-wrapper form input#password");
const EYE_ICON = document.querySelector("main > .login > .row > .login-wrapper form button > i");
const REGISTRATION_FORM = document.querySelector("main > .register > .row > .register-wrapper form");

window.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches("#showPasswordBtn") || target.matches(".eye-icon")) {
        togglePasswordInput(target);
    }
    else if (target.matches("#register-button")) {
        validateRegistrationForm(event);
    }
});

function validateRegistrationForm(event) {
    const email = REGISTRATION_FORM.querySelector("#email");
    const password = REGISTRATION_FORM.querySelector("#password");
    const confirmPassword = REGISTRATION_FORM.querySelector("#confirm-password");
    const firstname = REGISTRATION_FORM.querySelector("#firstname");
    const lastname = REGISTRATION_FORM.querySelector("#lastname");
    const birthdate = REGISTRATION_FORM.querySelector("#birthdate");
    const phone = REGISTRATION_FORM.querySelector("#phone");

    // Verify that required fields are filled
    if (email.checkValidity() === false || password.checkValidity() === false ||
        confirmPassword.checkValidity() === false || firstname.checkValidity() === false ||
        lastname.checkValidity() === false || phone.checkValidity() === false ||
        birthdate.checkValidity() === false
    ) {
        event.preventDefault();
    }

    // Verify that user is older than 16 years old
    const currentDate = new Date();
    const selectedDate = new Date(birthdate.value);
    const ageDifference = currentDate.getFullYear() - selectedDate.getFullYear();
    if (ageDifference < 16) {
        birthdate.setCustomValidity("Πρέπει να είσαι μεγαλύτερος από 16 ετών!");
        birthdate.reportValidity();
        event.preventDefault();
    }
    else {
        birthdate.setCustomValidity("");
    }

    // Verify that passwords match
    if (password.value !== confirmPassword.value) {
        confirmPassword.parentElement.querySelector(".password-match").classList.remove("hidden");
        event.preventDefault();
    } else {
        confirmPassword.parentElement.querySelector(".password-match").classList.add("hidden");
    }

    // Verify absence of forbidden characters
    const forbiddenCharsRegex = /[{}[\]()^*/=|<>~`;:]/;
    const fields = [email, password, confirmPassword, firstname, lastname, phone];
    let hasForbiddenChars = false;

    for (const field of fields) {
        if (forbiddenCharsRegex.test(field.value)) {
            field.parentElement.querySelector(".invalid-char").classList.remove("hidden");
            hasForbiddenChars = true;
        } else {
            field.parentElement.querySelector(".invalid-char").classList.add("hidden");
        }
    }
    if (hasForbiddenChars) {
        event.preventDefault();
    }

    REGISTRATION_FORM.classList.add("was-validated");
}

function togglePasswordInput() {
    if (PASSWORD_INPUT.type === "password") {
        EYE_ICON.classList.remove("fa-eye-slash");
        EYE_ICON.classList.add("fa-eye");
        PASSWORD_INPUT.type = "text";
    }
    else if (PASSWORD_INPUT.type === "text") {
        EYE_ICON.classList.remove("fa-eye");
        EYE_ICON.classList.add("fa-eye-slash");
        PASSWORD_INPUT.type = "password";
    }
}
