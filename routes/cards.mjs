import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { CardsParser } from "../controllers/cards.mjs";

const cardsRouter = express.Router();
const sessionAPI = new SessionAPI();

cardsRouter.get("/cards", async (request, response) => {
    let cards = await sessionAPI.getPersonCards("643afad69ed6dd38e91f3081");
    cards = CardsParser.parseCards(cards);
    response.render("cards", { cards });
});

export { cardsRouter };
