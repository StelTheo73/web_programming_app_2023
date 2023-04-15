import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { AddressParser } from "../controllers/addresses.mjs";

const addressRouter = express.Router();
const sessionAPI = new SessionAPI();

addressRouter.get("/addresses", async (request, response) => {
    let addresses = await sessionAPI.getPersonAddresses("643afad69ed6dd38e91f3081");
    addresses = AddressParser.parseAddresses(addresses);
    response.render("addresses", { addresses });
});

export { addressRouter };
