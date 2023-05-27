"use strict";

import { cartButtonListener } from "./cart.mjs";
import { orderButtonListener } from "./order.mjs";
import { userAddressesListener } from "./userItems.mjs";

function updateLocalStorage() {
    const addressDropdown = document.querySelector("#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown");
    const context = addressDropdown.innerHTML.trim();

    if (context.length === 0) {
        let addresses = JSON.parse(localStorage.getItem("addresses"));
        fillAddressDropdown(addresses);
    }
    else {        
        const addressDropdownContent = addressDropdown.querySelectorAll(".address-dropdown-content > ul > li");
        let addresses = [];

        for (let liItem of addressDropdownContent) {
            let _addressId = liItem.getAttribute("data-address-id");
            let _addressText = liItem.innerHTML;
            let address = {
                addressId : _addressId,
                addressText : _addressText
            };
            addresses.push(address);
        }
    
        localStorage.setItem("addresses", JSON.stringify(addresses));
    }

}

/* ======================================== */

/* NAVBAR */
/* ADDRESS DROPDOWN */
function fillAddressDropdown(addresses) {
    const addressDropdown = document.querySelector("#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown");
    let lastAddress = addresses[0];
    addresses = addresses.slice(1);

    let dropdownContent = `
        <h6>Ενεργή διεύθυνση</h6>
        <li class="active-address address-dropdown-element" data-address-id=${lastAddress.addressId}>${lastAddress.addressText}</li>
        <hr class="my-1">
        <h6>Επιλογή διεύθυνσης</h6>`;


    addresses.forEach(address => {
        dropdownContent += `<li class="address-dropdown-element my-1" data-address-id=${address.addressId}>${address.addressText}</li>`
    });

    addressDropdown.innerHTML = `
    <span class="address-dropdown-span">
        <button class="btn btn-secondary">
            <i class="fa fa-caret-down"></i>&nbsp;${lastAddress.addressText}
        </button></span>
        <div class="address-dropdown-content">
            <ul class="address-dropdown-element-wrapper">
                ${dropdownContent}
            </ul>
        </div>
    `;
}

function updateLastAddress(newAddressId) {
    let addresses = Object(JSON.parse(localStorage.getItem("addresses")));

    addresses.forEach(_address => {
        try {
            if (_address.addressId == newAddressId) {
                addresses[0] = {
                    addressId : _address.addressId,
                    addressText : _address.addressText
                }
            }
        }
        catch (err) {
            
        }
    });


    fillAddressDropdown(addresses);
    localStorage.setItem("addresses", JSON.stringify(addresses));
}
/* END ADDRESS DROPDOWN */
/* END NAVBAR */

/* ======================================== */

/* LISTENERS */
function addressDropdownListener(event) {
    try{
        if (!event.target.parentElement.matches(".address-dropdown-span") &&
             !event.target.matches(".address-dropdown-element-wrapper") &&
             !event.target.matches(".address-dropdown-element")
        ) 
        {
            const addressDropdownContent = document.querySelector(
                "#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown > .address-dropdown-content"
            );
            addressDropdownContent.classList.remove("show");
        }
        else if (event.target.parentElement.matches(".address-dropdown-span")) {
            const addressDropdownContent = document.querySelector(
                "#navbar-and-sidebar-wrapper > #main-navbar > header .address-dropdown > .address-dropdown-content"
            );
            addressDropdownContent.classList.toggle("show");
        }
        else if (event.target.classList.contains("address-dropdown-element") &&
            !event.target.classList.contains("active-address")
            ) {
                const newAddressId = event.target.dataset.addressId
                updateLastAddress(newAddressId);
            }
    }
    catch (err) {
        console.log(err)
    }
}

function userDropdownListener(event) {
    try{
        if (!event.target.parentElement.matches(".user-dropdown-span") &&
             !event.target.matches(".user-dropdown-element-wrapper") &&
             !event.target.matches(".user-dropdown-element") &&
             !event.target.matches(".user-dropdown-button-icon")
        ) {
            const userDropdownContent = document.querySelector(
                "#navbar-and-sidebar-wrapper > #main-navbar > header .user-dropdown > .user-dropdown-content"
            );
            userDropdownContent.classList.remove("show");
        }
        else if (event.target.matches(".user-dropdown-button-icon")) {
            const userDropdownContent = document.querySelector(
                "#navbar-and-sidebar-wrapper > #main-navbar > header .user-dropdown > .user-dropdown-content"
            );
            userDropdownContent.classList.toggle("show");
        }
        else if (event.target.parentElement.matches(".user-dropdown-span")) {
            const userDropdownContent = document.querySelector(
                "#navbar-and-sidebar-wrapper > #main-navbar > header .user-dropdown > .user-dropdown-content"
            );
            userDropdownContent.classList.toggle("show");
        }
    }
    catch (err) {
        console.log(err)
    }
}

function fetchShopsByCategoryListener(event) {
    let category = undefined;

    try {
        if (event.target.matches(".fetch-category-link")) {
            category = event.target.innerHTML;
        }
        else if (event.target.matches(".fetch-category-img")) {
            category = event.target.nextSibling.innerHTML;
        }
        else if (event.target.matches(".fetch-category-wrapper")) {
            category = event.target.childNodes[1].innerHTML;
        }

        if (category !== undefined) {
            fetchShopsByCategory(category);
        }
    }
    catch(err) {
        console.log(console.log(err));
    }
}
/* END LISTENERS */

/* ======================================== */

/* SIDEBAR */
/* SIDEBAR OBJECT */
class MainSidebar {
    constructor(sidebar_id) {
        this.element = document.getElementById(sidebar_id);
        this.is_open = false; 
    }

    openSidebar() {
        this.element.style.width = "100%";
        this.is_open = true;
    }

    closeSidebar() {
        this.element.style.width = "0%";
        this.is_open = false;
    }
}
/* END SIDEBAR OBJECT */

/* CLOSE SIDEBAR */
function closeMainSidebar() {
    mainSidebar.closeSidebar();
}
/* END CLOSE SIDEBAR */

/* OPEN SIDEBAR */
function openMainSidebar() {
    if (mainSidebar.is_open) {
        closeMainSidebar();
    }
    else {
        mainSidebar.openSidebar();
    }
}
/* END OPEN SIDEBAR */

/* SIDEBAR LISTENERS */
const mainSidebar = new MainSidebar("main-sidebar");
document.getElementById("open-main-sidebar-btn").addEventListener("click", openMainSidebar);
document.getElementById("close-main-sidebar-btn").addEventListener("click", closeMainSidebar);
document.getElementById("sidebar-link-to-footer").addEventListener("click", closeMainSidebar);
/* END SIDEBAR LISTENERS */
/* END SIDEBAR */

/* ======================================== */

/* SEARCH */
document.querySelector("#search-input").addEventListener("keydown", (event) => {
    if (event.code == "Enter" || event.keyCode == 13) {
        const userInput = event.target.value.trim();
        const city = JSON.parse(localStorage.getItem("addresses"))[0].addressText.split(",")[0].trim();
        if (userInput.length > 0){
            window.location.href = `/search?searchInput=${userInput}&city=${city}`;
        }
    }
});

function fetchShopsByCategory(category) {
    const city = JSON.parse(localStorage.getItem("addresses"))[0].addressText.split(",")[0].trim();
    window.location.href = `/search/categories/${category}?city=${city}`;
}
/* END SEARCH */

/* ======================================== */

/* GLOBAL CLICK LISTENER */
window.onclick = function(event) {
    addressDropdownListener(event);
    fetchShopsByCategoryListener(event);
    userDropdownListener(event);
}

/* END GLOBAL CLICK LISTENER */

/* ======================================== */

/* ON LOAD EVENTS */
updateLocalStorage();
cartButtonListener();
orderButtonListener();
userAddressesListener();
/* END ON LOAD EVENTS */

/* ======================================== */
