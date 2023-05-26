import express from "express";
import session from "express-session";
import { engine } from "express-handlebars";
import cookieParser from "cookie-parser";

import { loginRouter } from "./routes/login.mjs";
import { fetchRouter } from "./routes/fetch.mjs";
import { ordersRouter } from "./routes/orders.mjs";
import { addressRouter } from "./routes/addresses.mjs";
import { cardsRouter } from "./routes/cards.mjs";
import { shopRouter } from "./routes/shop.mjs";
import { searchRouter } from "./routes/search.mjs";
import { orderRouter } from "./routes/order.mjs";
import { registerRouter } from "./routes/register.mjs";
import { profileRouter } from "./routes/profile.mjs";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(session({
    secret: '$467314FA#$VRMR11FA#0310*wpa',
    resave: false,
    saveUninitialized: true
}));

app.engine(".hbs", engine({extname : ".hbs"}));
app.set("view engine", ".hbs");

// Routers
app.use("/", loginRouter);
app.use("/", fetchRouter);
app.use("/", ordersRouter);
app.use("/", addressRouter);
app.use("/", cardsRouter);
app.use("/", shopRouter);
app.use("/", searchRouter);
app.use("/", orderRouter);
app.use("/", registerRouter)
app.use("/", profileRouter)

app.get("/", async (request, response) => {
    try {
        if (!request.session.userId) {
            response.redirect("/login");
        }
        else {
            const lastAddress = request.session.lastAddress;
            const addresses = request.session.addresses;
            const addNewAddress = request.session.addNewAddress;
            const userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
            const homepage = true;
            request.session.userItemsEdited = false;
    
            response.render("homepage", {
                homepage,
                lastAddress,
                addresses,
                addNewAddress,
                userItemsEdited
            });
        }
    }
    catch(error) {
        console.log(error);
        response.render("internal-error",
            {
                layout : "error"    
            }
        );
    }
});

app.use((request, response) => {
    response.render("page-not-found",
        {
            layout : "error"
        }
    );
});

app.listen(PORT, "0.0.0.0", () => console.log(`Listening on ${PORT}...`));
