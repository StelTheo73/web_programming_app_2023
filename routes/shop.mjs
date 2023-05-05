import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { shopParser } from "../controllers/shop.mjs";

const shopRouter = express.Router();
const sessionAPI = new SessionAPI();

shopRouter.get("/shops/:shop_id", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
    
            const shopId = decodeURIComponent(request.params.shop_id);
            const shop = await sessionAPI.getShopData(shopId);
    
            if (shop.length === 0) {
                response.render("page-not-found",
                    {
                        layout : "error"
                    }
                );
                return; // Stop processing 
            }
    
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

export { shopRouter };
