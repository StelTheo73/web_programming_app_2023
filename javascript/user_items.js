"use strict";

// TODO : FETCH ADDRESSES
const ADDRESSES = [
    {
        "city": "Θεσσαλονίκη",
        "street": "Sint Elit",
        "number": "180",
        "postcode": "92116",
        "country": "Greece",
        "floor": "3",
    },
    {
        "city": "Θεσσαλονίκη",
        "street": "Accusam Per",
        "number": "65",
        "postcode": "73888",
        "country": "Greece",
        "floor": "5",
    },
    {
        "city": "Θεσσαλονίκη",
        "street": "Has Per",
        "number": "128",
        "postcode": "50675",
        "country": "Greece",
        "floor": "3",
        "notes": "hello"
    }
]

let parseValue = (value) => {
    if ((value != undefined) & (value != null)) return value;
    else return ""
}

// TODO : FETCH CARDS
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

function addAddress(address, parentDiv) {
    let city = parseValue(address["city"]);
    let street = parseValue(address["street"]);
    let number = parseValue(address["number"]);
    let floor = parseValue(address["floor"]);
    let bell = parseValue(address["bell"]);
    let postcode = parseValue(address["postcode"]);
    let country = parseValue(address["country"]);
    let notes = parseValue(address["notes"])
    // ADDRESS TEMPLATE
    const addressTemplate = `
      <div class="col-12 col-md-6 col-xl-4">
        <div class="address-card-wrapper">
          <div>
            <label>Πόλη</label>
            <input type="text" value="${city}" readonly>
          </div>
          <div>
            <label>Οδός</label>
            <input type="text" value="${street}" readonly>
          </div>
          <div>
            <label>Αριθμός</label>
            <input type="text" value="${number}" readonly>
          </div>   
          <div>
            <label>Όροφος</label>
            <input type="text" value="${floor}" readonly>
          </div>
          <div>
            <label>Κουδούνι</label>
            <input type="text" value="${bell}" readonly>
          </div>
          <div>
            <label>Τ. Κ.</label>
            <input type="text" value="${postcode}" readonly>
          </div>
          <div>
            <label>Χώρα</label>
            <input type="text" value="${country}" readonly>
          </div>
          <div>
            <label>Σημειώσεις</label>
            <textarea rows="5" cols="22" readonly>${notes}</textarea>
          </div>
          <div>
            <span><i class="far fa-edit text-primary"></i></span>
            <span><i class="fas fa-trash-alt text-danger"></i></span>
          </div>
        </div>
    </div>
    `
  
    parentDiv.innerHTML = parentDiv.innerHTML + addressTemplate;
}

function addCard(card, parentDiv) {
    let cardNumber = parseValue(card["card_number"]);
    let cvv = parseValue(card["cvv"]);
    let expirationDate = parseValue(card["expiration_date"]);
    let cardholder = parseValue(card["cardholder"]);
  
    // CARD TEMPLATE
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

const cardsDiv = document.querySelector("#user-items-cards > .row:nth-child(2)");
const addressesDiv = document.querySelector("#user-items-addresses > .row:nth-child(2)");

if (addressesDiv != null) {
    for (let address of ADDRESSES) {
        addAddress(address, addressesDiv)
    }
}

if (cardsDiv != null) {
    for (let card of CARDS) {
        addCard(card, cardsDiv)
    }
}

