import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { OrdersParser } from "../controllers/orders.mjs";

const ordersRouter = express.Router();
const sessionAPI = new SessionAPI(); 


ordersRouter.get("/orders", async (request, response) => {
    let orders = await sessionAPI.getPersonOrders("643afad69ed6dd38e91f3081");
    let items = []
    orders = OrdersParser.parseOrders(orders);

    response.render("orders", { orders });
});

export {ordersRouter};
