import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { CardsParser } from "../controllers/cards.mjs";
import { AddressParser } from "../controllers/addresses.mjs"; 

const fetchRouter = express.Router();
const sessionAPI = new SessionAPI();

fetchRouter.post("/fetch/user-items", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            let userItems = await sessionAPI.getPersonData(request.session.userId[0]._id);
            userItems.cards = CardsParser.parseCards(userItems.cards);
            userItems.addresses = AddressParser.parseAddresses(userItems.addresses);
    
            response.json(userItems);
            response.end();
        }
    }
    catch (error) {
        console.log(error)
        response.render("internal-error",
            {
                layout : "error"    
            }
        );
    }
});

export { fetchRouter };
