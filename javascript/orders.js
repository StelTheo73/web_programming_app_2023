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

function flipCardListeners() {
  let flipCardButtons = document.querySelectorAll(".flip-card-btn");

  flipCardButtons.forEach(function(button) {
      let flipCardInner = button.parentElement.parentElement.parentElement.parentElement;
      let flipCardFront = flipCardInner.querySelector(".flip-card-front");
      let flipCardBackItem = flipCardInner.querySelector(".item-info-flip-card");
      let flipCardBackShop = flipCardInner.querySelector(".shop-info-flip-card");
      
      
      let flipCardShow, flipCardHide;
      
    if (button.className.indexOf("items-info-flip-btn") >= 0) {
      flipCardHide = flipCardFront;
      // flipCardInner.querySelector(".flip-card-front");      
      flipCardShow = flipCardBackItem;
      
      // flipCardInner.querySelector(".item-info-flip-card");

      button.addEventListener("click", function() {
        flipCardInner.style.transform = "rotateY(180deg)";
  
        flipCardHide.style.display = "none";
        flipCardShow.style.display = "block";
      });

    }
    else if (button.className.indexOf("shop-info-flip-btn") >= 0) {
      flipCardHide = flipCardFront; 
      // flipCardInner.querySelector(".flip-card-front");
      flipCardShow = flipCardBackShop; 
      // flipCardInner.querySelector(".shop-info-flip-card");

        button.addEventListener("click", function() {
          flipCardInner.style.transform = "rotateY(180deg)";
  
          flipCardHide.style.display = "none";
          flipCardShow.style.display = "block";
      });
    }
    else if (button.className.indexOf("order-info-flip-btn") >= 0) {
      flipCardShow = flipCardFront
      // flipCardInner.querySelector(".flip-card-front");
      if (button.className.indexOf("from-item-info") >= 0) {
        flipCardHide = flipCardBackItem;
        // flipCardInner.querySelector(".item-info-flip-card");
      }
      else if (button.className.indexOf("from-shop-info") >= 0) {
        flipCardHide = flipCardBackShop;
        // flipCardInner.querySelector(".shop-info-flip-card");
      }

      button.addEventListener("click", function() {
        flipCardInner.style.transform = "";
  
        flipCardHide.style.display = "none";
        flipCardShow.style.display = "block";
      });
    }

  })
}

import { RequestMaker } from "./request_maker.js";
const requestMaker = new RequestMaker();
addOrders();
flipCardListeners();


