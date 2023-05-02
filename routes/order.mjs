import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { OrderParser } from "../controllers/order.mjs";

const orderRouter = express.Router();
const sessionAPI = new SessionAPI();

orderRouter.post("/order/submit", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        // console.log(request.body);

        const order = await OrderParser.parseOrder(request.body, request.session.userId[0]._id);
        const _response = await sessionAPI.saveOrder(order);
        console.log(_response);
        // for (let field in request.body) {
            // console.log(field)
        // }

        response.redirect("/orders");
    }
});

export { orderRouter };