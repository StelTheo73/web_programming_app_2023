import express, { request } from "express";
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
        let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
        request.session.userItemsEdited = false;

        cards = CardsParser.parseCards(cards);
        response.render(
            "cards",
            {
                cards,
                userItemsEdited
            }
        );
    }
});

cardsRouter.post("/cards/add", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        await sessionAPI.addPersonItem(request.session.userId[0]._id, request.body, "card");
        response.redirect("/cards");
    }
});

cardsRouter.get("/cards/delete/:cardId", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        const cardId = request.url.split("/")[3];
        await sessionAPI.deletePersonItem(request.session.userId[0]._id, cardId, "card");
        response.redirect("/cards");
    }
});

export { cardsRouter };
