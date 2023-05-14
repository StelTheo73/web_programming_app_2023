"use strict";

const PASSWORD_INPUT = document.querySelector("main > .login > .row > .login-wrapper form input#password")

window.addEventListener("click", (event) => {
    if (event.target.matches(".fa-eye-slash")) {
        console.log(PASSWORD_INPUT);
        const type = PASSWORD_INPUT.getAttribute('type') === 'password' ? 'text' : 'password';
        PASSWORD_INPUT.setAttribute("type", type);
    }
});
