"use strict";

import { showItemsInCart, clearCart } from "./cart.mjs";
import { removeTones } from "./greekRegex.mjs";

const ORDER_OVERLAY = document.querySelector("#order-overlay-container");
const SHOP_ADDRESS_SPAN = document.querySelector(".shop-items-container > div > div > span");
const EMPTY_ORDER_FEEDBACK = ORDER_OVERLAY.querySelector("#empty-order-feedback");
const NO_ADDRESS_FEEDBACK = ORDER_OVERLAY.querySelector("#no-address-feedback");

const ORDER_FORM = ORDER_OVERLAY.querySelector("form");
const SHOP_ID_INPUT = ORDER_FORM.querySelector("#order-shop-id");
const ORDER_ITEMS_INPUT = ORDER_FORM.querySelector("#order-items");
const ADDRESS_SELECT = ORDER_FORM.querySelector("#order-address");
const PHONE_INPUT = ORDER_FORM.querySelector("#order-phone");
const PAYMENT_MEAN_SELECT = ORDER_FORM.querySelector("form #order-payment-mean");
const CARD_SELECT = ORDER_FORM.querySelector("form #order-card");
const NOTES_INPUT = ORDER_FORM.querySelector("form #order-notes");

const SUBMIT_BUTTON = ORDER_FORM.querySelector("#order-submit-button");
const RETURN_BUTTON = ORDER_FORM.querySelector("#order-return-button");

function orderButtonListener() {
    RETURN_BUTTON.addEventListener("click", function(event) {
        event.preventDefault();
        ORDER_OVERLAY.classList.remove("show");
        showItemsInCart();
    });
    PAYMENT_MEAN_SELECT.addEventListener("change", function (event) {
        if (event.target.value === "CARD") {
            CARD_SELECT.parentElement.classList.remove("hidden");
            CARD_SELECT.removeAttribute("disabled");
        }
        else {
            CARD_SELECT.parentElement.classList.add("hidden");
            CARD_SELECT.setAttribute("disabled", true);
        }
    });
    ORDER_FORM.addEventListener("submit", function(event) {
        validateOrder(event);
    });
}

async function fillFormWithUserData() {
    const userItems = await fetchUserItems();
    const phone = userItems.phone;
    const addresses = userItems.addresses;
    const cards = userItems.cards;
    let addressMatch = false;
    
    if (addresses === undefined || addresses === null || addresses.length === 0) {
        ORDER_FORM.classList.add("hidden");
        NO_ADDRESS_FEEDBACK.classList.remove("hidden");
    }
    else {
        for (let address of addresses) {
            const option = document.createElement("option");

            if (removeTones(address.city.toLowerCase()) !== removeTones(SHOP_ADDRESS_SPAN.innerHTML.toLowerCase())) {
                continue;
            }
            addressMatch = true;

            let addressText = `${address.city}, ${address.street} ${address.number}, ${address.floor}, ${address.bell}`
            if (addressText.length > 50) {
                addressText = addressText.slice(0, 50) + "...";
            }
            
            const addressInfo = document.createTextNode(addressText);
            option.setAttribute("value", address.address_id);
            option.appendChild(addressInfo);
            ADDRESS_SELECT.appendChild(option);
        }
    }

    if (addressMatch === false) {
        ADDRESS_SELECT.querySelector("option").classList.remove("hidden");
    }

    if (cards === undefined || cards === null || cards.length === 0) {
        CARD_SELECT.querySelector("option").classList.remove("hidden");
    }
    else {
        CARD_SELECT.querySelector("option").classList.add("hidden");
        
        for (let card of cards) {
            const option = document.createElement("option");
            const cardInfo = document.createTextNode(card["cardNumber"]);
            option.setAttribute("value", card["_id"]);
            option.appendChild(cardInfo);
            CARD_SELECT.appendChild(option);
        }
    }

    PHONE_INPUT.value = phone;
}

async function fetchUserItems() {
    let userItems = [];

    await fetch("/fetch/user-items", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        userItems = data;
    })
    .catch(error => {
        console.log(error);
    });

    return userItems;
}

function showEmptyOrder() {
    ORDER_FORM.classList.add("hidden");
    EMPTY_ORDER_FEEDBACK.classList.remove("hidden");
    SUBMIT_BUTTON.setAttribute("disabled", true);
}

function showOrder() {
    const shopId = window.location.href.split("/")[4];
    const storedOrderItems = sessionStorage.getItem(shopId);
    
    ORDER_OVERLAY.classList.add("show");

    if (storedOrderItems === undefined || storedOrderItems === null ||
        storedOrderItems.length === 0
    ) {
        showEmptyOrder();
        return;
    }
    SUBMIT_BUTTON.removeAttribute("disabled");
    ORDER_FORM.classList.remove("hidden");
    EMPTY_ORDER_FEEDBACK.classList.add("hidden");
    NO_ADDRESS_FEEDBACK.classList.add("hidden");

    SHOP_ID_INPUT.value = shopId;
    ORDER_ITEMS_INPUT.value = storedOrderItems;

    fillFormWithUserData();

}

function validateOrder(event) {
    if (ADDRESS_SELECT.checkValidity() === false ||
        PHONE_INPUT.checkValidity() === false ||
        PAYMENT_MEAN_SELECT.checkValidity === false
    ) {
        event.preventDefault();
        ORDER_FORM.classList.add("was-validated");
        return;
    }
    
    if (PAYMENT_MEAN_SELECT.value === "CARD") {
        if (CARD_SELECT.checkValidity() === false) {
            event.preventDefault();
            ORDER_FORM.classList.add("was-validated");
            return;
        }
    }

    SHOP_ID_INPUT.removeAttribute("disabled");
    ORDER_ITEMS_INPUT.removeAttribute("disabled");

    ORDER_FORM.classList.add("was-validated");

    clearCart();
}

export { showOrder, orderButtonListener };
