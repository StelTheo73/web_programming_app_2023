import express, { request, response } from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { searchResultsParser } from "../controllers/search.mjs";
import Handlebars from "handlebars";

Handlebars.registerHelper("search-list-items", function(items, shopId) {
    let result = "";
  
    if (Array.isArray(items) && items.length > 0) {
      items.forEach(function(item) {
        if (item.hasOwnProperty("itemId") && item.hasOwnProperty("itemName")) {
          let url = `/shops/${shopId}/products/${item.itemId}`;
          let context = `
            <li>
                <span><a href="${url}">${item.itemName}</a></span>
                <span>${item.itemPrice} &euro;</span>
            </li>
            `;
          result += context;
        }
      });
    }

    return new Handlebars.SafeString(result);
  });

const searchRouter = express.Router();
const sessionAPI = new SessionAPI();

searchRouter.get("/search", async (request, response) => {
  if (!request.session.userId) {
      response.redirect("/login");
  }
  else {
    const userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
    request.session.userItemsEdited = false;
    
    const searchInput = request.query.searchInput;
    const city = request.query.city;
    let [shops, products] = await sessionAPI.searchShopsAndItems(searchInput, city);
  
    shops = searchResultsParser.parseShops(shops);
    products = searchResultsParser.parseProducts(products);
  
    response.render(
      "search-results",
        {
          shops,
          products,
          userItemsEdited
        }
    );
    
  }
});

searchRouter.get("/search/categories/:category_name", async (request, response) => {
  if (!request.session.userId) {
    response.redirect("/login");
  }
  else {
    const userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
    request.session.userItemsEdited = false;

    const category = decodeURIComponent(request.params.category_name);
    const city = request.query.city;
    let shops = await sessionAPI.searchShopsByCategory(category, city);

    shops = searchResultsParser.parseShops(shops);

    response.render(
      "search-results",
        {
          shops,
          userItemsEdited
        }
    );

  }
});

export { searchRouter };
