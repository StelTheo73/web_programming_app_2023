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

function addItems(items, childSelectorNumber, shopName) {
  let childSelector = "#user-orders > .row:nth-child(2) > div:nth-child(" + 
                      childSelectorNumber +
                      ") > div > div:nth-child(2)";
  let itemsDiv = document.querySelector(childSelector);
  itemsDiv.innerHTML = itemsDiv.innerHTML + `
    <div>
      <span>${shopName}</span>
    </div>
  `;

  items.forEach(item => {
    let name = parseValue(item["name"]);
    let quantity = parseValue(item["quantity"], "number");
    let price = parseValue(item["price"], "number");

    if (quantity > 1) {
      let one_price = price;
      price = price * quantity;
      price = price + "&nbsp;(" + one_price + ")";
    }

    itemsDiv.innerHTML = itemsDiv.innerHTML + `
      <div>
        <span>${name}</span>
        <span>${quantity}</span>
        <span>${price}</span>
      </div>
    `;
  });

  itemsDiv.innerHTML = itemsDiv.innerHTML + `
  <div>
    <span class="button-span"><button class="btn btn-outline-secondary flip-card-btn order-info-flip-btn from-item-info">Προβολή Παραγγελίας</button></span>
  </div>
  `;
};

function addShopInfo(order, childSelectorNumber) {
  let childSelector = "#user-orders > .row:nth-child(2) > div:nth-child(" + 
                      childSelectorNumber +
                      ") > div > div:nth-child(3)";
  let shopDiv = document.querySelector(childSelector);
  
  let shopName = parseValue(order["shop_name"]);
  let shopPhone = parseValue(order["shop_phone"]);
  let shopEmail = parseValue(order["shop_email"]);

  let street = parseValue(order["shop_address"]["street"]);
  let number = parseValue(order["shop_address"]["number"]);
  let city = parseValue(order["shop_address"]["city"]);
  let  postcode = parseValue(order["shop_address"]["postcode"]);
  let country = parseValue(order["shop_address"]["country"]);

  shopDiv.innerHTML = shopDiv.innerHTML + `
    <div>
      <span>${shopName}</span>
    </div>
    <div>
      <span>${street}, ${number}, ${city}, ${postcode}, ${country}</span>
    </div>
    <div>  
      <span>${shopPhone}</span>
    </div>
    <div>
      <span>${shopEmail}</span>
    </div>
  `;

  shopDiv.innerHTML = shopDiv.innerHTML + `
  <div>
    <span class="button-span"><button class="btn btn-outline-secondary flip-card-btn order-info-flip-btn from-shop-info">Προβολή Παραγγελίας</button></span>
  </div>
  `;
}

function addOrders() {
    let orders = requestMaker.fetchOrders(null);
    let orderSelector = 1;
    console.log(orders);

    let parentElement = document.querySelector("#user-orders > .row:nth-child(2)");
    for (let order of orders) {
        let items = categorizeItems(order["order_contains"]);
        let order_id = parseValue(order["_id"]);
        let shopName = parseValue(order["shop_name"]);
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
            <div class="flip-card-front" id="${order_id}">
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

                </div>
                <div class="flip-card-back shop-info-flip-card">

                </div>
            </div>
          </div>
        `

        parentElement.innerHTML = parentElement.innerHTML + ORDERS_TEMPLATE;

        addItems(items, orderSelector, shopName);
        addShopInfo(order, orderSelector);

        orderSelector++;
    }
}

function flipCardListeners() {
  let orderCards = document.querySelectorAll(".flip-card");

  orderCards.forEach((orderCard) => {
    orderCard.addEventListener("click", (event) => {
      let targetClass = event.target.className;

      let flipCardInner = orderCard.querySelector(".flip-card-inner");
      let flipCardFront = flipCardInner.querySelector(".flip-card-front");
      let flipCardBackItem = flipCardInner.querySelector(".item-info-flip-card");
      let flipCardBackShop = flipCardInner.querySelector(".shop-info-flip-card");

      if (targetClass.indexOf("items-info-flip-btn") >= 0) {
        flipCardInner.style.transform = "rotateY(180deg)";
        flipCardFront.style.display = "none";
        flipCardBackItem.style.display = "block";
      }
      else if (targetClass.indexOf("shop-info-flip-btn") >= 0) {
        flipCardInner.style.transform = "rotateY(180deg)";
        flipCardFront.style.display = "none";
        flipCardBackShop.style.display = "block";
      }
      else if (targetClass.indexOf("from-item-info") >= 0) {
        flipCardInner.style.transform = "";
        flipCardBackItem.style.display = "none";
        flipCardFront.style.display = "block";
      }
      else if (targetClass.indexOf("from-shop-info") >= 0) {
        flipCardInner.style.transform = "";
        flipCardBackShop.style.display = "none";
        flipCardFront.style.display = "block";
      }
    });
  });
}

import { RequestMaker } from "./request_maker.js";
const requestMaker = new RequestMaker();
addOrders();
flipCardListeners();


