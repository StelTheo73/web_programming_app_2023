import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { CardsParser } from "../controllers/cards.mjs";

const cardsRouter = express.Router();
const sessionAPI = new SessionAPI();

cardsRouter.get("/cards", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        let cards = await sessionAPI.getPersonCards(request.session.userId[0]._id);
        cards = CardsParser.parseCards(cards);
        response.render("cards", { cards });
    }
});

cardsRouter.post("/card/add", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        response.send(request.body);
        response.end();
    }
});

export { cardsRouter };
