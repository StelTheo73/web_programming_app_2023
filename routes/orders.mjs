import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { OrdersParser } from "../controllers/orders.mjs";

const ordersRouter = express.Router();
const sessionAPI = new SessionAPI(); 


ordersRouter.get("/orders", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        let orders = await sessionAPI.getPersonOrders(request.session.userId[0]._id);
        let items = []
        orders = OrdersParser.parseOrders(orders);
        response.render("orders", { orders });
    }
});

export {ordersRouter};
