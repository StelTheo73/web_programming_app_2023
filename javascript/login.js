// Get the forms
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Get the inputs for each form
const loginInputs = loginForm.querySelectorAll("input");
const registerInputs = registerForm.querySelectorAll("input");

// Clear the values of the login form inputs
function clearLoginForm() {
  loginInputs.forEach((input) => {
    input.value = "";
  });
}

// Clear the values of the register form inputs
function clearRegisterForm() {
  registerInputs.forEach((input) => {
    input.value = "";
  });
}

// Show the login form and hide the register form
function showLoginForm() {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
  clearLoginForm();
}

// Show the register form and hide the login form
function showRegisterForm() {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  clearRegisterForm();
}
