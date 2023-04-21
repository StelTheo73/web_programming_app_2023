import express, { request, response } from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { AddressParser } from "../controllers/addresses.mjs";

const addressRouter = express.Router();
const sessionAPI = new SessionAPI();

addressRouter.get("/addresses", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        let addresses = await sessionAPI.getPersonAddresses(request.session.userId[0]._id);
        addresses = AddressParser.parseAddresses(addresses);
        response.render("addresses", { addresses });
    }
});

addressRouter.post("/address/add", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        console.log(request.body);

        await sessionAPI.addPersonAddress(request.session.userId[0]._id, request.body);

        response.redirect("/addresses");
    }
});

export { addressRouter };
