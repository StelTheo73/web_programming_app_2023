window.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const changeProfileButton = document.getElementById("change-profile-button");
    const saveProfileButton = document.getElementById("save-profile-button");
    const form = document.getElementById("profile-form");
    const inputs = form.querySelectorAll("input");

    // Store the initial input values
    const initialValues = Array.from(inputs).map(input => input.value);

    // Add event listener to the "Change Profile" button
    changeProfileButton.addEventListener("click", function() {
      // Restore the initial input values
      inputs.forEach(function(input, index) {
        input.value = initialValues[index];
      });

      // Show the "Save" button and hide the "Change Profile" button
      saveProfileButton.classList.remove("d-none");
      changeProfileButton.classList.add("d-none");
    });

    
    // Add event listener to the "Save" button
saveProfileButton.addEventListener("click", function(event) {
  // Prevent the default form submission behavior
    event.preventDefault();

    // Submit the form directly
    form.submit();
    });

    // Listen for the form's submit event
    form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the updated form data
    const formData = new FormData(form);

    // Send the form data to the server using fetch
    fetch("/profile/submit", {
        method: "POST",
        body: formData
    })
        .then(function(response) {
        if (response.ok) {
            // Handle the success response, e.g., show a success message, redirect, etc.
            console.log("Profile successfully updated");
            window.location.href = "/profile";
        } else {
            // Handle the error response, e.g., show an error message, display validation errors, etc.
            console.log("Error updating profile");
        }
        })
        .catch(function(error) {
        console.log("Error updating profile", error);
        });
    });

  });


  //Show and hide password
  document.addEventListener('DOMContentLoaded', function() {
    var showPasswordBtn = document.getElementById('showPasswordBtn');
    var passwordInput = document.getElementById('password');
    var passwordIcon = showPasswordBtn.querySelector('i');

    showPasswordBtn.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordIcon.classList.remove('fa-eye-slash');
            passwordIcon.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            passwordIcon.classList.remove('fa-eye');
            passwordIcon.classList.add('fa-eye-slash');
        }
    });
});
