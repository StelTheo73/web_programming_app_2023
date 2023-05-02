import express from "express";
import session from "express-session";
import { engine } from "express-handlebars";
import cookieParser from "cookie-parser";
import { SessionAPI } from "./services/database_IO/sessionAPI.mjs";

import { loginRouter } from "./routes/login.mjs";
import { fetchRouter } from "./routes/fetch.mjs";
import { ordersRouter } from "./routes/orders.mjs";
import { addressRouter } from "./routes/addresses.mjs";
import { cardsRouter } from "./routes/cards.mjs";
import { shopRouter } from "./routes/shop.mjs";
import { searchRouter } from "./routes/search.mjs";
import { orderRouter } from "./routes/order.mjs";

const app = express();
const sessionAPI = new SessionAPI();

app.use(express.static("public"));
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(session({
    secret: 'your-secret-key',
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

app.get("/", async (request, response) => {
    const myUrl = new URL("http://" + request.headers.host + request.url);
    console.log(request.method, ", ", request.url);

    
    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        let lastAddress = request.session.lastAddress;
        let addresses = request.session.addresses;
        let addNewAddress = request.session.addNewAddress;
        let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
        request.session.userItemsEdited = false;

        response.render("homepage", { 
            lastAddress,
            addresses,
            addNewAddress,
            userItemsEdited
        });
    }

});

app.use((request, response) => {
    console.log("Redirect from ", request.url);
    console.log(request.method, ", ", request.url);

    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        response.redirect("/");
    }

});

app.listen(3000, "0.0.0.0", () => console.log("Listening on localhost:3000..."))
