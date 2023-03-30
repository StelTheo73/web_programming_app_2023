"use strict";

const CARDS = [
    {
      "card_number": "9653066179213801",
      "cvv": "570",
      "expiration_date": "1980-10-01",
      "cardholder": "ΣΤΈΛΛΑ ΖΑΧΑΡΊΟΥ"
    },
    {
      "card_number": "8514710048592345",
      "cvv": "286",
      "expiration_date": "1978-01-01",
      "cardholder": "ΣΤΈΛΛΑ ΖΑΧΑΡΊΟΥ"
    },
    {
      "card_number": "8405301532889154",
      "cvv": "100",
      "expiration_date": "1983-09-01",
      "cardholder": "ΣΤΈΛΛΑ ΖΑΧΑΡΊΟΥ"
    }
  ]

function addCard(card, parentDiv) {
  let cardNumber = card["card_number"];
  let cvv = card["cvv"];
  let expirationDate = card["expiration_date"];
  let cardholder = card["cardholder"];

  const cardTemplate = `
    <div class="col-12 col-md-6 col-xl-4">
      <div class="address-card-wrapper">
        <div>
          <label>Αρ. Κάρτας</label>
          <input type="text" value="${cardNumber}" readonly>
        </div>
        <div>
          <label>CVV</label>
          <input type="text" value="${cvv}" readonly>
        </div>
        <div>
          <label>Ημερ. Λήξης</label>
          <input type="text" value="${expirationDate}" readonly>
        </div>   
        <div>
          <label>Όνομα Κατόχου</label>
          <input type="text" value="${cardholder}" readonly>
        </div>
        <div>
          <span><i class="far fa-edit text-primary"></i></span>
          <span><i class="fas fa-trash-alt text-danger"></i></span>
        </div>
      </div>
  </div>
  `

  parentDiv.innerHTML = parentDiv.innerHTML + cardTemplate;
}


const cardsDiv = document.querySelector("#user-items > .row:nth-child(2");
console.log(cardsDiv);

for (let card of CARDS) {
  addCard(card, cardsDiv)
}
