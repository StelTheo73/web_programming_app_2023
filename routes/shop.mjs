import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";

const shopRouter = express.Router();
const sessionAPI = new SessionAPI();

shopRouter.get("/shops/:shop_id/products/:product_id", async (request, response) => {
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        const myUrl = new URL("http://" + request.headers.host + request.url);
        console.log("shop router 1", request.method, ", ", request.url);

        console.log(request.url)

        console.log("SHOP ID", String(request.url).split("/") )
        const shopId = request.url.split("/")[2];
        const productId = request.url.split("/")[3];

        const shop = sessionAPI.getShopData(shopId);

        response.send("shop router 1 " + request.method + ", " + request.url);
        // response.send(shop);
        response.end();



        // const myUrl = new URL("http://" + request.headers.host + request.url);
        // console.log("shop router 1", request.method, ", ", request.url, request.baseUrl);
        // response.send(myUrl);
        // response.end();

        // console.log(request.originalUrl);
    }

});

shopRouter.get("/shops/:shop_id", async (request, response) => {
    // if (!request.session.userId) {
    //     response.redirect("/login");
    // }
    // else {

        const shopId = request.url.split("/")[2];
        const shop = await sessionAPI.getShopData(shopId);

        let itemsPerCategory = [];

        for (let category of shop.categories) {
            itemsPerCategory.push(await sessionAPI.fetchItemsByCategory(shopId, category));
        }

        response.render("shop", { shop, itemsPerCategory });
        // response.send(itemsPerCategory);
        // response.end();
    // }

});

export { shopRouter };
