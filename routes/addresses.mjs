import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { AddressParser } from "../controllers/addresses.mjs";

const addressRouter = express.Router();
const sessionAPI = new SessionAPI();

addressRouter.get("/addresses", async (request, response) => {
    let addresses = await sessionAPI.getPersonAddresses("642d12fd9f0c2c52ba5b81f6");
    addresses = AddressParser.parseAddresses(addresses);
    response.render("addresses", { addresses });
});

export { addressRouter };
