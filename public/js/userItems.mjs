"use strict";

const USER_ITEMS = document.querySelector(".user-items");
const SHOW_USER_ITEMS = document.querySelectorAll(".user-items .show-user-item");
const ADD_USER_ITEM = document.querySelectorAll(".user-items .add-user-item");

const ADDRESS_FORM = document.querySelector("form#add-address-form");
const CARD_FORM = document.querySelector("form#add-card-form");

function userAddressesListener() {
    if (ADDRESS_FORM !== null && ADDRESS_FORM !== undefined) {
        ADDRESS_FORM.addEventListener("submit", function(event) {
            validateAddressForm(event);
        });
    }

    if (CARD_FORM !== null && CARD_FORM !== undefined) {
        CARD_FORM.addEventListener("submit", function(event) {
            validateCardForm(event);
        });
    }

    if (USER_ITEMS === null || USER_ITEMS === undefined) {
        return; // do not add listeners for buttons that do not exist
    }

    document.addEventListener("click", function(event) {
        const target = event.target;
        const actionType = USER_ITEMS.querySelector("form #action-type");

        if (target.matches(".add-new-user-item-btn")) {
            actionType.value = "add";
            changePanel(false, true);
        }
        else if (target.matches(".close-new-user-item-btn")) {
            changePanel(true, false);

            if (ADDRESS_FORM !== null && ADDRESS_FORM !== undefined) {
                clearFormInputs(ADDRESS_FORM);
            }

            if(CARD_FORM !== null && CARD_FORM !== undefined) {
                clearFormInputs(CARD_FORM);
            }
        }
        else if (target.matches(".fa-edit")) {
            actionType.value = "edit";
            fillAddressFormWithUserData(event);
            changePanel(false, true);
        }
        else if (target.matches(".fa-trash-alt"))
        if (confirm("Επιθυμείτe να διαγράψετε αυτό το στοιχείο;")) {
            deleteUserItem(event);
        }
    });
}

function changePanel(showUserItems, showAddUserItem) {
    if (showUserItems === true) {
        SHOW_USER_ITEMS.forEach(item => {
            item.style.display = "flex";
        });
    }
    else if (showUserItems === false) {
        SHOW_USER_ITEMS.forEach(item => {
            item.style.display = "none";
        });
    }

    if (showAddUserItem === true) {
        ADD_USER_ITEM.forEach(item => {
            item.style.display = "flex";
        });
    }
    else if (showAddUserItem === false) {
        ADD_USER_ITEM.forEach(item => {
            item.style.display = "none";
        });
    }

}

function deleteUserItem(event) {
    const itemType = event.target.parentNode.parentNode.parentNode.classList[0];
    const itemId = event.target.parentNode.parentNode.parentNode.id;
    let path = null;
    if (itemType.indexOf("address") >= 0) {
        path = "addresses";
    }
    else if (itemType.indexOf("card") >= 0) {
        path = "cards";
    }

    if (itemType !== null) {
        window.location.href = `/${path}/delete/${itemId}`;
    }
}

function validateAddressForm(event) {
    const actionType = ADDRESS_FORM.querySelector("#action-type");
    const addressId = ADDRESS_FORM.querySelector("#address-id");
    const city = ADDRESS_FORM.querySelector("#city");
    const street = ADDRESS_FORM.querySelector("#street");
    const number = ADDRESS_FORM.querySelector("#number");
    const country = ADDRESS_FORM.querySelector("#country");

    if (actionType.checkValidity() === false || addressId.checkValidity() === false ||
    city.checkValidity() === false || street.checkValidity() === false 
    || number.checkValidity() === false || country.checkValidity() === false) {
        event.preventDefault();
        ADDRESS_FORM.classList.add("was-validated");
        return;
    }

    actionType.removeAttribute("disabled");
    addressId.removeAttribute("disabled");

    ADDRESS_FORM.classList.add("was-validated");
}

function validateCardForm(event) {
    const cardNumber = CARD_FORM.querySelector("#card_number");
    const cvv = CARD_FORM.querySelector("#cvv");
    const cardholder = CARD_FORM.querySelector("#cardholder");
    const expirationDate = CARD_FORM.querySelector("#expiration_date");

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

    CARD_FORM.classList.add("was-validated");
}

function fillAddressFormWithUserData(event) {
    const addressId = ADDRESS_FORM.querySelector("#address-id");
    const city = ADDRESS_FORM.querySelector("#city");
    const street = ADDRESS_FORM.querySelector("#street");
    const number = ADDRESS_FORM.querySelector("#number");
    const country = ADDRESS_FORM.querySelector("#country");
    const countryOptions = country.querySelectorAll("option");
    const floor = ADDRESS_FORM.querySelector("#floor");
    const bell = ADDRESS_FORM.querySelector("#bell");
    const postcode = ADDRESS_FORM.querySelector("#postcode");
    const note = ADDRESS_FORM.querySelector("#note");

    const wrapper = event.target.parentNode.parentNode.parentNode;
    
    const userAddressId = wrapper.id;
    const userCity = wrapper.querySelector("input.user-item-city").value;
    const userStreet = wrapper.querySelector("input.user-item-street").value;
    const userNumber = wrapper.querySelector("input.user-item-number").value;
    const userFloor = wrapper.querySelector("input.user-item-floor").value;
    const userBell = wrapper.querySelector("input.user-item-bell").value;
    const userPostcode = wrapper.querySelector("input.user-item-postcode").value;
    const userCountry = wrapper.querySelector("input.user-item-country").value;
    const userNote = wrapper.querySelector("textarea.user-item-note").innerHTML;
    
    addressId.setAttribute("value", userAddressId);

    city.value = userCity;
    street.value = userStreet;
    number.value = userNumber;
    floor.value = userFloor;
    bell.value = userBell;
    postcode.value = userPostcode;
    note.value = userNote;

    for (let option of countryOptions) {
        if (option.value === userCountry) {
            option.setAttribute("selected", true);
        }
        else {
            option.removeAttribute("selected");
        }
    }

}

function clearFormInputs(form) {
    const formInputs = form.querySelectorAll("input");
    formInputs.forEach(input => {
        input.value = "";
    });
}

export { userAddressesListener };
