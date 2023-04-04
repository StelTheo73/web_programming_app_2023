"use-strict";

let PAYMENT_MAP = {
  "CARD" : "far fa-credit-card",
  "GOOGLE PAY" : "fab fa-google-pay",
  "CASH" : "fa fa-money-bill-alt"
}

let parseValue = (value, type = "string") => {
  let typeMap = {
    "string" : "",
    "number" : 0
  }
  
  if ((value != undefined) & (value != null)) return value;
  else {
    return typeMap[type];
  }
}

function indexOfObject(items_list, item) {
  for (let i = 0; i < items_list.length; i++) {
    if (JSON.stringify(items_list[i]) === JSON.stringify(item)) {
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
      position = indexOfObject(items_list, item);

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

function calculateCost(items) {
  let cost = 0;
  for (let item of items) {
    cost = cost + item["price"] * item["quantity"];
  }
  return Math.ceil(cost*100) / 100;
} 

function visualizeRating(rating) {
  let stars = ["far fa-star", "far fa-star",
    "far fa-star", "far fa-star", "far fa-star"
  ];

  for (let i = 0; i < rating; i++) {
    stars[i] = "fas fa-star";
  }

  return stars;
}

function addOrders() {
    let orders = requestMaker.fetchOrders(null);
    let parentElement = document.querySelector("#user-orders > .row:nth-child(2)");
    for (let order of orders) {
        let items = categorizeItems(order["order_contains"]);
        let shopName = parseValue(order["name"]);
        let datetime = parseValue(order["datetime"]);
        let status_ = parseValue(order["status"]);
        
        let paymentMean = parseValue(order["payment_mean"]);
        let card = parseValue(order["card"]);
        let cardNumber = parseValue(card["card_number"]);
        if (cardNumber){
          cardNumber = "&nbsp;(" + cardNumber + ")";
        }
        let rating = parseValue(order["rating"], "number");
        
        let street = parseValue(order["address"]["street"]);
        let number = parseValue(order["address"]["number"]);
        let city = parseValue(order["address"]["city"]);
        let  postcode = parseValue(order["address"]["postcode"]);
        let country = parseValue(order["address"]["country"]);
        let bell = parseValue(order["address"]["bell"]);
        let floor = parseValue(order["address"]["floor"]);
        let note = parseValue(order["address"]["note"]);

        let cost = calculateCost(items);
        let stars = visualizeRating(rating); 

        let paymentMeanIcon = PAYMENT_MAP[paymentMean];

        let ORDERS_TEMPLATE = `
          <div class="col-12 col-md-6 col-xl-4 flip-card">
            <div class="order-wrapper flip-card-inner">
                <div class="flip-card-front">
                    <div>
                        <span>${shopName}</span>
                    </div>
                    <div>
                        <span>Ημερομηνία</span>
                        <span>${datetime}</span>
                    </div>
                    <div>
                        <span>Κατάσταση</span>
                        <span>${status_}</span>
                    </div>
                    <div>
                        <span>Κόστος</span>
                        <span>${cost}</span>
                    </div>
                    <div>
                        <span>Τρόπος πληρωμής</span>
                        <span><i class="${paymentMeanIcon}"></i>${cardNumber}</span>
                    </div>
                    <div>
                        <span>${street}, ${number}, ${city}, ${postcode}, ${country}</span>
                    </div>
                    <div>
                        <span>${floor}, ${bell}</span>
                    </div>
                    <div>
                        <span class="button-span"><button class="btn btn-outline-secondary flip-card-btn items-info-flip-btn">Προβολή Προϊόντων</button></span>
                    </div>
                    <div>
                        <span class="button-span"><button class="btn btn-outline-secondary flip-card-btn shop-info-flip-btn">Επικοινωνία με το κατάστημα</button></span>
                    </div>
                    <div>
                        <span>
                          <i class="${stars[0]}"></i>
                          <i class="${stars[1]}"></i>
                          <i class="${stars[2]}"></i>
                          <i class="${stars[3]}"></i>
                          <i class="${stars[4]}"></i>
                        </span>
                    </div>
                </div>
                <div class="flip-card-back item-info-flip-card">
                    <div>${items}</div>
                    <div>
                        <span class="button-span"><button class="btn btn-outline-secondary flip-card-btn order-info-flip-btn from-item-info">Προβολή Παραγγελίας</button></span>
                    </div>
                </div>
                <div class="flip-card-back shop-info-flip-card">
                    <div>Shop info</div>
                    <div>
                        <span class="button-span"><button class="btn btn-outline-secondary flip-card-btn order-info-flip-btn from-shop-info">Προβολή Παραγγελίας</button></span>
                    </div>
                </div>
            </div>
          </div>
        `

        parentElement.innerHTML = parentElement.innerHTML + ORDERS_TEMPLATE;
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
      flipCardShow = flipCardBackItem;
      
      button.addEventListener("click", function() {
        flipCardInner.style.transform = "rotateY(180deg)";
  
        flipCardHide.style.display = "none";
        flipCardShow.style.display = "block";
      });

    }
    else if (button.className.indexOf("shop-info-flip-btn") >= 0) {
      flipCardHide = flipCardFront; 
      flipCardShow = flipCardBackShop; 

        button.addEventListener("click", function() {
          flipCardInner.style.transform = "rotateY(180deg)";
  
          flipCardHide.style.display = "none";
          flipCardShow.style.display = "block";
      });
    }
    else if (button.className.indexOf("order-info-flip-btn") >= 0) {
      flipCardShow = flipCardFront
      if (button.className.indexOf("from-item-info") >= 0) {
        flipCardHide = flipCardBackItem;
      }
      else if (button.className.indexOf("from-shop-info") >= 0) {
        flipCardHide = flipCardBackShop;
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


