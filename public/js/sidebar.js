"use strict";

class ItemDIVs {
    constructor() {
        this.parents = document.querySelectorAll("#sidebar-items-div");
        this.categoriesShown = false;
        this.items = document.querySelectorAll(".sidebar-items-div");
    }

    forceHide() {
        this.categoriesShown = false;
        this.shopsShown = false;
        this._itemsDisplay();
    }

    itemsDisplay(elementId) {
        if (elementId.indexOf("categories") != -1) {
            this.categoriesShown = !this.categoriesShown;
        }
        this._itemsDisplay();
    }

    _itemsDisplay() {
        if (this.categoriesShown) {
            for (let element of this.items[0].children) {
                element.classList.remove("hide");
            }
        }
        else {
            for (let element of this.items[0].children) {
                element.classList.add("hide");
            }
        }
    }
}

const itemDIVsObj = new ItemDIVs();

// EVENT LISTENERS
const sidebarDropdownLinks = document.querySelectorAll(".sidebar-dropdown-link");
sidebarDropdownLinks.forEach(element => {
    element.addEventListener("click", function() {
        itemDIVsObj.itemsDisplay(element.id);
    });
});

const sidebarCloseButton = document.querySelector("#close-main-sidebar-btn");
sidebarCloseButton.addEventListener("click", function() {
    itemDIVsObj.forceHide();
});
