"use strict";

console.log("Hello");

class MainSidebar {
    constructor(sidebar_id) {
        this.element = document.getElementById(sidebar_id);
        this.is_open = false; 
    }

    openSidebar() {
        this.element.style.width = "100%";
        this.is_open = true;
    }

    closeSidebar() {
        this.element.style.width = "0%";
        this.is_open = false;
    }
}

function closeMainSidebar() {
    mainSidebar.closeSidebar();
}

function openMainSidebar() {
    if (mainSidebar.is_open) {
        closeMainSidebar();
    }
    else {
        mainSidebar.openSidebar();
    }
}

// ===================
// Initialize Objects
const mainSidebar = new MainSidebar("main-sidebar");

// ===================
// EVENT LISTENERS

// sidebar
document.getElementById("open-main-sidebar-btn").addEventListener("click", openMainSidebar);
document.getElementById("close-main-sidebar-btn").addEventListener("click", closeMainSidebar);
document.getElementById("sidebar-link-to-footer").addEventListener("click", closeMainSidebar);

// search
document.querySelector("#search-input").addEventListener("keydown", (event) => {
    // TODO GET ACTIVE CITY
    let city = "Αθήνα"
    if (event.code == "Enter") {
        const userInput = event.target.value.trim();
        if (userInput.length > 0){
            window.location.href = `/search?searchInput=${userInput}&city=${city}`;
        }
    }
});

const addUserItems = document.querySelectorAll(".add-user-item");
const showUserItems = document.querySelectorAll(".show-user-item");
const openAddUserItemsButtons = document.querySelectorAll(".add-new-user-item-btn");
const closeUserItemsButtons = document.querySelectorAll(".close-new-user-item-btn");

openAddUserItemsButtons.forEach(button => {
    button.addEventListener("click", function() {
        
        addUserItems.forEach(addUserItem => {
            addUserItem.style.display = "block";
        });
        showUserItems.forEach(showUserItem => {
            showUserItem.style.display = "none";
        });

    });
});

closeUserItemsButtons.forEach(button => {
    button.addEventListener("click", function() {
        
        addUserItems.forEach(addUserItem => {
            addUserItem.style.display = "none";
        });
        showUserItems.forEach(showUserItem => {
            showUserItem.style.display = "flex";
        });

    });
});


const addAddressForm = document.getElementById("addAddressForm");
const addCardForm = document.getElementById("addCardForm");
if (addAddressForm != null){
    addAddressForm.addEventListener("submit", function(event) {
        let city = document.getElementById("city");
        let street = document.getElementById("street");
        let number = document.getElementById("number");
        let country = document.getElementById("country");
    
        if (city.checkValidity() === false || street.checkValidity() === false 
        || number.checkValidity() === false || country.checkValidity() === false) {
            event.preventDefault();
        }
    
        addAddressForm.classList.add("was-validated");
    });
}

if (addCardForm != null) {
    addCardForm.addEventListener("submit", function(event) {
        let cardNumber = document.getElementById("card_number");
        let cvv = document.getElementById("cvv");
        let cardholder = document.getElementById("cardholder");
        let expirationDate = document.getElementById("expiration_date");
    
        if (cardNumber.checkValidity() === false || cvv.checkValidity() === false 
        || cardholder.checkValidity() === false || expirationDate.checkValidity() === false) {
            event.preventDefault();
        }

        let currentDate = new Date();
        let selectedDate = new Date(expirationDate.value);
        if (selectedDate < currentDate) {
            expirationDate.setCustomValidity("Η κάρτα σου έχει λήξει και δε μπορεί να χρησιμοποιηθεί.");
            expirationDate.reportValidity();
            event.preventDefault();
        }
        else {
            expirationDate.setCustomValidity("");
        }

        addCardForm.classList.add("was-validated");
    });
}
