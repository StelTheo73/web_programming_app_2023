"use-strict";

function indexOfObject(items_list, item) {
  // console.log("item");
  // console.log(item);
  for (let i = 0; i < items_list.length; i++) {
    // console.log("item of list")
    // console.log(items_list[i]);

    if (JSON.stringify(items_list[i]) === JSON.stringify(item)) {
      // console.log("found at " + i);
      return i;
    }
  }
  return -1;
}

function categorizeItems(items) {
    let items_list = [];
    let quantity = [];
    let position = 0;

    for (let item of items) {
      // console.log(items_list);
      position = indexOfObject(items_list, item);
      // console.log(position);
      // console.log("\n==========================\n");

      if (position >= 0) {
          quantity[position]++;
      }
      else {
          items_list.push(item)
          quantity.push(1);
      }
    }

    for (let i = 0; i < items_list.length; i++) {
        items_list[i]["quantity"] = quantity[i];
    }

    return items_list;

}

function addOrders() {
    let orders = requestMaker.fetchOrders(null);
    for (let order of orders) {
        let items = categorizeItems(order["order_contains"]);
        console.log(items);
        // console.log("\n==========================\n");
    }
}

import { RequestMaker } from "./request_maker.js";
const requestMaker = new RequestMaker();
addOrders();


/* ============ */

// Get the modal
let modal = document.querySelector("#order-items-modal");
// let modal2 = document.querySelector("#shop-info-modal");

// Get the close button
let closeBtn = document.querySelector(".close-modal-btn");
let btn = document.querySelector("#open-items-modal-btn");
let btn2 = document.querySelector("#open-shop-info-modal-btn");
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.add("show");

}
btn2.onclick = function() {
  modal.style.display = "block";
  modal.classList.add("show");

}


closeBtn.onclick = function() {
  modal.style.display = "none";
  modal.classList.remove("show");
}


