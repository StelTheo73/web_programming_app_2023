"use strict";

const PASSWORD_INPUT = document.querySelector("main > .profile > .row > .profile-wrapper form input#password");
const EYE_ICON = document.querySelector("main > .profile > .row > .profile-wrapper form button > i");
const PROFILE_FORM = document.querySelector("main > .profile > .row > .profile-wrapper form");

window.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches("#showPasswordBtn") || target.matches(".eye-icon")) {
        togglePasswordInput(target);
    }
    else if (target.matches("#save-profile-button")) {
        validateProfileForm(event);
    }
});

function validateProfileForm(event) {
    const email = PROFILE_FORM.querySelector("#email");
    const password = PROFILE_FORM.querySelector("#password");
    const firstname = PROFILE_FORM.querySelector("#firstname");
    const lastname = PROFILE_FORM.querySelector("#lastname");
    const birthdate = PROFILE_FORM.querySelector("#birthdate");
    const phone = PROFILE_FORM.querySelector("#phone");

    // Verify that required fields are filled
    if (email.checkValidity() === false || password.checkValidity() === false ||
       firstname.checkValidity() === false || lastname.checkValidity() === false
       || phone.checkValidity() === false || birthdate.checkValidity() === false
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

    // Verify absence of forbidden characters
    const forbiddenCharsRegex = /[{}[\]()^*/=|<>~`;:]/;
    const fields = [email, password, firstname, lastname, phone];
    let hasForbiddenChars = false;

    for (const field of fields) {
        if (forbiddenCharsRegex.test(field.value)) {
            field.parentElement.querySelector(".invalid-char").classList.remove("hidden");
            hasForbiddenChars = true;
        } else {
            if (field === password) {
                field.parentElement.parentElement.querySelector(".invalid-char").classList.add("hidden");
            }
            else {
                field.parentElement.querySelector(".invalid-char").classList.add("hidden");
            }
        }
    }
    if (hasForbiddenChars) {
        event.preventDefault();
    }

    PROFILE_FORM.classList.add("was-validated");
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
