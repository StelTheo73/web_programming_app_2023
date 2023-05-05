import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { OrdersParser } from "../controllers/orders.mjs";

const ordersRouter = express.Router();
const sessionAPI = new SessionAPI(); 


ordersRouter.get("/orders", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            let orders = await sessionAPI.getPersonOrders(request.session.userId[0]._id);
            let addNewAddress = false; // If true, user must provide one address from the UI
            let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
            request.session.userItemsEdited = false;
    
            orders = OrdersParser.parseOrders(orders);
    
            addNewAddress = request.session.addNewAddress;
            response.render(
                "orders", 
                { 
                    orders,
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

export {ordersRouter};
