"use strict";

console.log("Hello");

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

function closeMainSidebar() {
    mainSidebar.closeSidebar();
}

function openMainSidebar() {
    if (mainSidebar.is_open) {
        closeMainSidebar();
    }
    else {
        mainSidebar.openSidebar();
    }
}

// ===================
// Initialize Objects
const mainSidebar = new MainSidebar("main-sidebar");

// ===================
// EVENT LISTENERS

// sidebar
document.getElementById("open-main-sidebar-btn").addEventListener("click", openMainSidebar);
document.getElementById("close-main-sidebar-btn").addEventListener("click", closeMainSidebar);
document.getElementById("sidebar-link-to-footer").addEventListener("click", closeMainSidebar);

// search
document.querySelector("#search-input").addEventListener("keydown", (event) => {
    // TODO GET ACTIVE CITY
    let city = "Αθήνα"
    if (event.code == "Enter") {
        const userInput = event.target.value.trim();
        if (userInput.length > 0){
            window.location.href = `/search?searchInput=${userInput}&city=${city}`;
        }
    }
});
