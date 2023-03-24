"use strict";

import {Categories} from "./categories.js";

// Category DIV Element
// class CategoryDIVElement {
//     constructor(parent_id) {
//         this.parent = document.getElementById(parent_id);
//         this.element = document.createElement("div");
//     }

//     showCategories() {
//         const categories = this.parent.childNodes;
//         categories.forEach(category => {
//             console.log(category);
//         });
//     }
// }

// Items DIV Elements
class ItemDIVs {
    constructor() {
        this.parents = document.querySelectorAll("#sidebar-items-div");
        this.categoriesShown = false;
        this.shopsShown = false;
        this.items = document.querySelectorAll(".sidebar-items-div");
    }

    itemsDisplay(elementId) {
        if (elementId.indexOf("categories") != -1) {
            this.categoriesShown = !this.categoriesShown;
        }
        else if (elementId.indexOf("shops") != -1) {
            this.shopsShown = !this.shopsShown;
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

        if (this.shopsShown) {
            for (let element of this.items[1].children) {
                element.classList.remove("hide");
            }
        }
        else {
            for (let element of this.items[1].children) {
                element.classList.add("hide");
            }
        }

    }

}

// Initialize Objects
const categoriesObj = new Categories();
let categories = categoriesObj.getCategories();

const itemDIVsObj = new ItemDIVs();
// console.log(categories);


// EVENT LISTENERS
const sidebarDropdownLinks = document.querySelectorAll(".sidebar-dropdown-link");
sidebarDropdownLinks.forEach(element => {
    element.addEventListener("click", function() {
        itemDIVsObj.itemsDisplay(element.id);
    });
});