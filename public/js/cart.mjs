"use strict";

import { showOrder } from "./order.mjs";

let BLOCK_SESSION_STORAGE = false;

const CART_OVERLAY = document.querySelector("#cart-overlay-container");
const CART_ITEMS_WRAPPER = document.querySelector("#cart-overlay-container > .custom-overlay-content .cart-items-wrapper");
const TITLE_DIV = CART_ITEMS_WRAPPER.querySelector(".cart-item-title");

const CONTINUE_TO_ORDER_BTN = document.querySelector("#cart-overlay-container > .custom-overlay-content .continue-to-order");
const CLEAR_CART_BTN = document.querySelector("#cart-overlay-container > .custom-overlay-content .clear-cart");
const POPUP = document.querySelector("#itemAddedPopup");

function showPopup(text) {
    POPUP.innerHTML = text;
    POPUP.removeAttribute("style")
    POPUP.classList.add("show");
    setTimeout(function() {
        POPUP.classList.remove("show")
    }, 1200);
}

function cartButtonListener() {
    document.querySelectorAll(".show-cart").forEach(button => {
        button.addEventListener("click", function () {
            showItemsInCart();
        });
    });
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const item = button.parentNode;
            const itemId = item.getAttribute("data-item-id");
            const itemName = item.querySelector("span > span:nth-child(1)").innerHTML;
            const itemPrice = item.querySelector("span > span:nth-child(2)").innerHTML.split(" ")[0];
            addItemToCart(itemId, itemName, itemPrice);
        });
    });
    CART_OVERLAY.querySelectorAll(".close-cart").forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector("#cart-overlay-container").classList.remove("show");
        });
    });
    CART_OVERLAY.querySelectorAll(".continue-to-order").forEach(button => {
        button.addEventListener("click", function () {
            CART_OVERLAY.classList.remove("show")
            showOrder();
        });
    });
    CART_OVERLAY.querySelectorAll(".clear-cart").forEach(button => {
        button.addEventListener("click", function () {
            clearCart();
        });
    });
}

function showEmptyCart() {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const textNode = document.createTextNode("Το καλάθι σου είναι άδειο!");

    span.appendChild(textNode);
    div.appendChild(span);

    CART_ITEMS_WRAPPER.appendChild(TITLE_DIV);
    CART_ITEMS_WRAPPER.appendChild(div);

    CONTINUE_TO_ORDER_BTN.setAttribute("disabled", "true");
    CLEAR_CART_BTN.setAttribute("disabled", "true");
}

function showItemsInCart() {
    const shopId = window.location.href.split("/")[4].replace("#", "").replace("/", "").substring(0,24);
    let cartItems = sessionStorage.getItem(shopId);

    CART_ITEMS_WRAPPER.innerHTML = "";
    CART_OVERLAY.classList.add("show");
    
    if (cartItems === null || cartItems === undefined) { // Not defined cart
        showEmptyCart();
        return;
    }
    else {
        cartItems = JSON.parse(cartItems)

        if (cartItems.length === 0) { // Empty cart
            showEmptyCart();
            return;
        }

        CART_ITEMS_WRAPPER.appendChild(TITLE_DIV);
        
        CONTINUE_TO_ORDER_BTN.removeAttribute("disabled");
        CLEAR_CART_BTN.removeAttribute("disabled");

        for (let item of cartItems) {
            const div = document.createElement("div");
            const nameSpan = document.createElement("span");
            const priceSpan = document.createElement("span");
            const quantitySpan = document.createElement("span");
            const buttonSpan = document.createElement("span");
            const decreaseQuantityBtn = document.createElement("button");
            const increaseQuantityBtn = document.createElement("button");


            const nameNode = document.createTextNode(item.itemName);
            let finalPrice = (item.itemPrice * item.quantity);
            finalPrice = finalPrice.toFixed(2);
            const priceNode = document.createTextNode(finalPrice + " " + "\u20AC");
            const quantityNode = document.createTextNode(item.quantity);

            div.setAttribute("class", "d-flex justify-content-between align-items-center cart-item my-2");
            div.setAttribute("data-item-id", item.itemId);
            decreaseQuantityBtn.setAttribute("class", "btn btn-outline-secondary increase-quantity-btn");
            increaseQuantityBtn.setAttribute("class", "btn btn-outline-secondary decrease-quantity-btn");
            decreaseQuantityBtn.addEventListener("click", function (event) {
                changeQuantity("decrease", event);
            });
            increaseQuantityBtn.addEventListener("click", function(event) {
                changeQuantity("increase", event);
            });

            nameSpan.appendChild(nameNode);
            priceSpan.appendChild(priceNode);
            quantitySpan.appendChild(quantityNode);
            decreaseQuantityBtn.innerHTML = "-";
            increaseQuantityBtn.innerHTML = "+";

            buttonSpan.appendChild(decreaseQuantityBtn);
            buttonSpan.appendChild(quantitySpan);
            buttonSpan.appendChild(increaseQuantityBtn);

            div.appendChild(nameSpan);
            div.appendChild(priceSpan);
            div.appendChild(buttonSpan);
            CART_ITEMS_WRAPPER.appendChild(div);
        }
    }
}

async function changeQuantity(type, event) {
    while (BLOCK_SESSION_STORAGE === true) { // Wait for previous change to finish
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    BLOCK_SESSION_STORAGE = true; // Block changes

    const shopId = window.location.href.split("/")[4].replace("#", "").replace("/", "").substring(0,24);
    const itemId = event.target.parentNode.parentNode.getAttribute("data-item-id");
    let storedCart = sessionStorage.getItem(shopId);
    let shopCart = [];

    if (storedCart === undefined || storedCart === null) {
        return;
    }

    shopCart = JSON.parse(storedCart);
    const index = findIndexOfItemInCart(itemId, shopCart);

    if(type === "increase") {
        shopCart[index]["quantity"]++;
    }
    else if (type === "decrease") {
        if (--shopCart[index]["quantity"] === 0) {
            shopCart.splice(index, 1);
        };
    }

    shopCart = JSON.stringify(shopCart);
    sessionStorage.setItem(shopId, shopCart);

    BLOCK_SESSION_STORAGE = false;

    showItemsInCart();
}

async function addItemToCart(itemId, itemName, itemPrice) {
    while (BLOCK_SESSION_STORAGE === true) { // Wait for previous addition to finish
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    BLOCK_SESSION_STORAGE = true; // Block additions

    const shopId = window.location.href.split("/")[4].replace("#", "").replace("/", "").substring(0,24);

    let item = {
        "itemId" : itemId,
        "itemName" : itemName,
        "quantity" : 1,
        "itemPrice" : Number(itemPrice)
    }
    let shopCart = [];
    let storedCart = sessionStorage.getItem(shopId);

    if (storedCart === null || storedCart === undefined) { // shop cart does not exist
        shopCart.push(item);
    }
    else { // shop cart exists
        shopCart = JSON.parse(storedCart);
        const index = findIndexOfItemInCart(item.itemId, shopCart);
        
        if (index >= 0) { // item already in cart
            shopCart[index]["quantity"] +=1;
        }
        else { // item not in cart
            shopCart.push(item);
        }
    }

    shopCart = JSON.stringify(shopCart);
    sessionStorage.setItem(shopId, shopCart);
    
    BLOCK_SESSION_STORAGE = false;

    showPopup("Το προϊόν προστέθηκε στο καλάθι");
}

async function clearCart() {
    while (BLOCK_SESSION_STORAGE === true) { // Wait for previous change to finish
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    BLOCK_SESSION_STORAGE = true; // Block changes

    const shopId = window.location.href.split("/")[4].replace("#", "").replace("/", "").substring(0,24);
    sessionStorage.removeItem(shopId);

    BLOCK_SESSION_STORAGE = false;

    showItemsInCart();
}

function findIndexOfItemInCart(itemId, cart) {
    let counter = 0;

    for (let _item of cart) {
        if (_item.itemId === itemId) {
            return counter;
        }
        counter++;
    }

    return -1;
}

export { showItemsInCart, cartButtonListener, clearCart };
