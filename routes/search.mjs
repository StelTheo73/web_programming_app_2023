import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { searchResultsParser } from "../controllers/search.mjs";

const searchRouter = express.Router();
const sessionAPI = new SessionAPI();

searchRouter.get("/search", async (request, response) => {
    let searchInput = request.query.searchInput;
    let city = request.query.city;

    let [shops, products] = await sessionAPI.searchShopsAndItems(searchInput, city);
    shops = searchResultsParser.parseShops(shops);
    products = searchResultsParser.parseProducts(products);

    response.render("search-results", {shops, products});
});

export { searchRouter };
