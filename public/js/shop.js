"use strict";

function mapShopsWithCategories() {
    const shopCategories = document.querySelectorAll(".shop-items > .category-items");
    let map = {}
    
    for (let shopCategory of shopCategories) {
        map[shopCategory.id] = shopCategory;
    }

    return map;
}
const SHOP_CATEGORIES_MAP = mapShopsWithCategories();

function showProductsOfCategory(categoryName) {
    for (let shopCategory in SHOP_CATEGORIES_MAP) {
        if (shopCategory === categoryName) {
            SHOP_CATEGORIES_MAP[shopCategory].style.display = "block";
        }
        else {
            SHOP_CATEGORIES_MAP[shopCategory].style.display = "none";
        }
    }
}

let shopCategoriesParent = document.querySelectorAll(".shop-items > .shop-categories > .shop-categories-wrapper > ul");
shopCategoriesParent.forEach(element => {
    element.addEventListener("click", (event) => {
        let innerHTML = String(event.target.innerHTML);
        if (innerHTML.indexOf("<span>") >= 0) { // clicked <li> area
            innerHTML = event.target.childNodes[0].innerHTML;
        }
    
        if (!innerHTML) {
            return;
        }
    
        // ensure that only text and not an HTML element is present in innerHTML
        if (innerHTML.indexOf("<") == -1 && innerHTML.indexOf(">") == -1) {
            showProductsOfCategory(innerHTML);
        }
    });
});
