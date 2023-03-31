"use strict";

const ADDRESSES = [
    {
      "city": "Θεσσαλονίκη",
      "street": "Sint Elit",
      "number": "180",
      "postcode": "92116",
      "country": "Greece",
      "floor": "3",
      "note": null
    },
    {
      "city": "Θεσσαλονίκη",
      "street": "Accusam Per",
      "number": "65",
      "postcode": "73888",
      "country": "Greece",
      "floor": "5",
      "note": null
    },
    {
      "city": "Θεσσαλονίκη",
      "street": "Has Per",
      "number": "128",
      "postcode": "50675",
      "country": "Greece",
      "floor": "3",
      "note": null
    }
  ]

function addAddress(address, parentDiv) {
  let city = address["city"];
  let street = address["street"];
  let number = address["number"];
  let floor = address["floor"];
  let bell = address["bell"];
  let postcode = address["postcode"];
  let country = address["country"];
  let notes = address["notes"];


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
          <textarea rows="5" cols="22" readonly value=${notes}></textarea>
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


const addressesDiv = document.querySelector("#user-items > .row:nth-child(2");
console.log(addressesDiv);

for (let address of ADDRESSES) {
  addAddress(address, addressesDiv)
}
