"use strict";

console.log("Hello");

function updateLocalStorage() {
    const addressDropdown = document.querySelector("#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown");
    const context = addressDropdown.innerHTML.trim();

    if (context.length === 0) {
        let addresses = JSON.parse(localStorage.getItem("addresses"));
        fillAddressDropdown(addresses);
    }
    else {        
        const addressDropdownContent = addressDropdown.querySelectorAll(".address-dropdown-content > ul > li");
        let addresses = [];

        for (let liItem of addressDropdownContent) {
            let _addressId = liItem.getAttribute("data-address-id");
            let _addressText = liItem.innerHTML;
            let address = {
                addressId : _addressId,
                addressText : _addressText
            };
            addresses.push(address);
        }
    
        localStorage.setItem("addresses", JSON.stringify(addresses));
    }

}

/* ======================================== */

/* NAVBAR */

/* ADDRESS DROPDOWN */
function fillAddressDropdown(addresses) {
    console.log("fill addresses ", addresses)
    const addressDropdown = document.querySelector("#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown");
    let lastAddress = addresses[0];
    addresses = addresses.slice(1);

    let dropdownContent = `
        <h6>Ενεργή διεύθυνση</h6>
        <li class="active-address address-dropdown-element" data-address-id=${lastAddress.addressId}>${lastAddress.addressText}</li>
        <hr class="my-1">
        <h6>Επιλογή διεύθυνσης</h6>`;


    addresses.forEach(address => {
        dropdownContent += `<li class="address-dropdown-element my-1" data-address-id=${address.addressId}>${address.addressText}</li>`
    });

    addressDropdown.innerHTML = `
    <span class="address-dropdown-span">
        <button class="btn btn-outline-secondary">
            <i class="fa fa-caret-down"></i>&nbsp;${lastAddress.addressText}
        </button></span>
        <div class="address-dropdown-content">
            <ul class="address-dropdown-element-wrapper">
                ${dropdownContent}
            </ul>
        </div>
    `


}

function updateLastAddress(newAddressId) {
    console.log("new address id", newAddressId);

    let addresses = Object(JSON.parse(localStorage.getItem("addresses")));
    console.log("fetched", addresses)
    const addressDropdown = document.querySelector("#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown");
    
    addresses.forEach(_address => {
        console.log(_address)
        console.log(_address.addressId, newAddressId)
        console.log(_address.addressId == newAddressId)
        if (_address.addressId == newAddressId) {
            console.log("match")
            console.log(_address.addressId, _address.addressText)
            addresses[0] = {
                addressId : _address.addressId,
                addressText : _address.addressText
            }
            console.log("new active ", addresses[0])
        }
        console.log("NEXT")
    });


    fillAddressDropdown(addresses);
    localStorage.setItem("addresses", JSON.stringify(addresses));
    console.log(localStorage.getItem("addresses"))
    console.log("======================")
}

/* END ADDRESS DROPDOWN */

/* END NAVBAR */

/* ======================================== */

/* SIDEBAR */

/* SIDEBAR OBJECT */
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
/* END SIDEBAR OBJECT */

/* CLOSE SIDEBAR */
function closeMainSidebar() {
    mainSidebar.closeSidebar();
}
/* END CLOSE SIDEBAR */

/* OPEN SIDEBAR */
function openMainSidebar() {
    if (mainSidebar.is_open) {
        closeMainSidebar();
    }
    else {
        mainSidebar.openSidebar();
    }
}
/* END OPEN SIDEBAR */

/* SIDEBAR LISTENERS */
const mainSidebar = new MainSidebar("main-sidebar");
document.getElementById("open-main-sidebar-btn").addEventListener("click", openMainSidebar);
document.getElementById("close-main-sidebar-btn").addEventListener("click", closeMainSidebar);
document.getElementById("sidebar-link-to-footer").addEventListener("click", closeMainSidebar);
/* END SIDEBAR LISTENERS */
/* END SIDEBAR */

/* ======================================== */

/* SEARCH */
document.querySelector("#search-input").addEventListener("keydown", (event) => {
    // TODO GET ACTIVE CITY
    console.log(event.keyCode);
    if (event.code == "Enter" || event.keyCode == 13) {
        const userInput = event.target.value.trim();
        const city = JSON.parse(localStorage.getItem("addresses"))[0].addressText.split(",")[0].trim();
        console.log(city)
        if (userInput.length > 0){
            window.location.href = `/search?searchInput=${userInput}&city=${city}`;
        }
    }
});
/* END SEARCH */

/* ======================================== */

/* ADDRESSES AND CARDS FORMS*/
// OPEN BUTTONS
const addUserItems = document.querySelectorAll(".add-user-item");
const showUserItems = document.querySelectorAll(".show-user-item");
// CLOSE BUTTONS
const openAddUserItemsButtons = document.querySelectorAll(".add-new-user-item-btn");
const closeUserItemsButtons = document.querySelectorAll(".close-new-user-item-btn");
// FORMS
const addAddressForm = document.getElementById("addAddressForm");
const addCardForm = document.getElementById("addCardForm");

/* OPEN FORM */
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
/* END OPEN FORM */

/* CLOSE FORM */
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
/* END CLOSE FORM */

/* ADDRESS FORM VALIDATION */
if (addAddressForm != null){
    addAddressForm.querySelector("input").focus({focusVisible: true});
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
/* END ADDRESS FORM VALIDATION */

/* CARD FORM VALIDATION */
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
/* END CARD FORM VALIDATION */

/* DELETE USER ITEM */
function deleteUserItem(event) {
    const itemType = event.target.parentNode.parentNode.parentNode.classList[0];
    const itemId = event.target.parentNode.parentNode.parentNode.classList[1];
    let path = null;
    
    if (itemType.indexOf("address") >= 0) {
        path = "addresses";
    }
    else if (itemType.indexOf("card") >= 0) {
        path = "cards";
    }

    if (itemType !== null) {
        console.log(`/${itemType}/delete/${itemId}`)
        window.location.href = `/${path}/delete/${itemId}`
    }
}

showUserItems.forEach(item => {
    item.addEventListener("click", (event) => {
        if (event.target.className.indexOf("fa-trash-alt") >= 0) {
            if (confirm("Are you sure?")) {
                deleteUserItem(event);      
            }
        }
    
    });
}); 
/* END DELETE ADDRESS */


/* END ADDRESSES AND CARDS FORMS*/

/* ======================================== */

/* GLOBAL CLICK LISTENER */
window.onclick = function(event) {
    // Address Dropdown Listener
    try{
        if (!event.target.parentElement.matches(".address-dropdown-span") &&
             !event.target.matches(".address-dropdown-element-wrapper") &&
             !event.target.matches(".address-dropdown-element")
            ) 
        {
            const addressDropdownContent = document.querySelector(
                "#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown > .address-dropdown-content"
            );
            if (addressDropdownContent.classList.contains("show")) {
                addressDropdownContent.classList.remove("show");
            }
        }
        else if (event.target.parentElement.matches(".address-dropdown-span")) {
            const addressDropdownContent = document.querySelector(
                "#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown > .address-dropdown-content"
            );
            addressDropdownContent.classList.toggle("show");
        }
        else if (event.target.classList.contains("address-dropdown-element") &&
            !event.target.classList.contains("active-address")
            ) {
                const newAddressId = event.target.dataset.addressId
                updateLastAddress(newAddressId);
            }
    }
    catch (err) {
        console.log(err)
    }
    // User Dropdown Listener
}

/* END GLOBAL CLICK LISTENER */

/* ON LOAD EVENTS */
updateLocalStorage();

/* END ON LOAD EVENTS */
