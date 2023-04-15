import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { CardsParser } from "../controllers/cards.mjs";

const cardsRouter = express.Router();
const sessionAPI = new SessionAPI();

cardsRouter.get("/cards", async (request, response) => {
    let cards = await sessionAPI.getPersonCards("642d12fd9f0c2c52ba5b81f6");
    cards = CardsParser.parseCards(cards);
    response.render("cards", { cards });
});

export { cardsRouter };
