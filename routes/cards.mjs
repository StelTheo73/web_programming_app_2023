import express, { request } from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { CardsParser } from "../controllers/cards.mjs";

const cardsRouter = express.Router();
const sessionAPI = new SessionAPI();
sessionAPI.connect();

cardsRouter.get("/cards", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            let cards = await sessionAPI.getPersonCards(request.session.userId[0]._id);
    
            if (cards === "ERROR") {
                response.render("page-not-found",
                    {
                        layout : "error"
                    }
                );
                return; // Stop processing 
            }
    
            let addNewAddress = false; // If true, user must provide one address from the UI
            let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
            request.session.userItemsEdited = false;
    
            cards = CardsParser.parseCards(cards);
    
            addNewAddress = request.session.addNewAddress;
            response.render(
                "cards",
                {
                    cards,
                    addNewAddress,
                    userItemsEdited
                }
            );
        }
    }
    catch(error) {
        console.log(error);
        response.render("internal-error",
            {
                layout : "error"    
            }
        );
    }
});

cardsRouter.post("/cards/add", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            await sessionAPI.addPersonItem(request.session.userId[0]._id, request.body, "card");
            response.redirect("/cards");
        }
    }
    catch(error) {
        console.log(error);
        response.render("internal-error",
            {
                layout : "error"    
            }
        );
    }
});

cardsRouter.get("/cards/delete/:cardId", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            const cardId = request.url.split("/")[3];
            await sessionAPI.deletePersonItem(request.session.userId[0]._id, cardId, "card");
            response.redirect("/cards");
        }
    }
    catch(error) {
        console.log(error);
        response.render("internal-error",
            {
                layout : "error"    
            }
        );
    }
});

export { cardsRouter };
