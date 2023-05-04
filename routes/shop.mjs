import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { shopParser } from "../controllers/shop.mjs";

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
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {

        const shopId = decodeURIComponent(request.params.shop_id);
        const shop = await sessionAPI.getShopData(shopId);
        let addNewAddress = false; // If true, user must provide one address from the UI
        let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
        request.session.userItemsEdited = false;

        let itemsPerCategory = [];
        let index = 0;

        for (let category of shop.categories) {
            itemsPerCategory.push(await sessionAPI.fetchItemsByCategory(shopId, category));
            itemsPerCategory[index].products = shopParser.parseItems(itemsPerCategory[index].products);
            index++;
        }

        addNewAddress = request.session.addNewAddress;
        response.render(
            "shop",
            { 
                shop,
                itemsPerCategory,
                addNewAddress,
                userItemsEdited
            }
        );
        // response.send(itemsPerCategory);
        // response.end();
    }

});

export { shopRouter };
