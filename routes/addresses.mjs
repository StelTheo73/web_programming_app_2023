import express, { request, response } from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { AddressParser } from "../controllers/addresses.mjs";

const addressRouter = express.Router();
const sessionAPI = new SessionAPI();
sessionAPI.connect();

addressRouter.get("/addresses", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            let lastAddress = await sessionAPI.getLastAddress(request.session.userId[0]._id)
            let addresses = await sessionAPI.getPersonAddresses(request.session.userId[0]._id)
            let addNewAddress = false; // If true, user must provide one address from the UI
            let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values 
    
            if (Object.keys(lastAddress).length === 0 || addresses.length === 0) {
                lastAddress = {};
                addresses = [];
                addNewAddress = true;
            }
            request.session.addNewAddress = addNewAddress;
            request.session.lastAddress = lastAddress;
            request.session.addresses = addresses;
            
            request.session.userItemsEdited = false;
    
            addresses = AddressParser.parseAddresses(addresses);
            addNewAddress = request.session.addNewAddress;
            
            response.render(
                "addresses",
                {
                    lastAddress,
                    addresses,
                    addNewAddress,
                    userItemsEdited
                }
            );
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

addressRouter.post("/addresses/add", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            console.log(request.body)
            if (request.body["action-type"] === "add") {
                await sessionAPI.addPersonItem(request.session.userId[0]._id, request.body, "address");
            }
            else if (request.body["action-type"] === "edit") {
                const addressId = request.body["address-id"];
                await sessionAPI.editPersonItem(request.session.userId[0]._id, request.body, addressId, "address");
            }
    
            request.session.userItemsEdited = true;
            response.redirect("/addresses");
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

addressRouter.get("/addresses/delete/:addressId", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            const addressId = request.url.split("/")[3];
            await sessionAPI.deletePersonItem(request.session.userId[0]._id, addressId, "address");
            request.session.userItemsEdited = true;
            response.redirect("/addresses");
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

export { addressRouter };
