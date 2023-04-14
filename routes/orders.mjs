import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { OrdersParser } from "../controllers/orders.mjs";

const ordersRouter = express.Router();
const sessionAPI = new SessionAPI(); 


ordersRouter.get("/orders", async (request, response) => {
    let orders = await sessionAPI.getPersonOrders("642d12fd9f0c2c52ba5b81f6");
    let items = []
    orders = OrdersParser.parseOrders(orders);


    // for (let order of orders) {
    //     items.push(order.items);
    // }
    // items = OrdersParser.parseItems(items);

    // console.log("Orders");
    // console.log(orders);
    response.render("orders", { orders });
});

export {ordersRouter};
