"use strict";

import {Categories} from "./categories.js";

// Category DIV Element
class CategoryDIVElement {
    constructor(parent_id) {
        this.parent = document.getElementById(parent_id);
        this.element = document.createElement("div");
    }
}


// EVENT LISTENERS

// Initialize Objects
const categoriesObj = new Categories()
let categories = categoriesObj.getCategories();
console.log(categories);