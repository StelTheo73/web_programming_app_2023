import express from "express";
import session from "express-session";
import { Session } from "express-session";
import { engine } from "express-handlebars";

import { loginRouter } from "./routes/login.mjs";
import { ordersRouter } from "./routes/orders.mjs";
import { addressRouter } from "./routes/addresses.mjs";
import { cardsRouter } from "./routes/cards.mjs";
import { shopRouter } from "./routes/shop.mjs";
import { searchRouter } from "./routes/search.mjs";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended : false}));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.engine(".hbs", engine({extname : ".hbs"}));
app.set("view engine", ".hbs");

// Routers
app.use("/", loginRouter);
app.use("/", ordersRouter);
app.use("/", addressRouter);
app.use("/", cardsRouter);
app.use("/", shopRouter);
app.use("/", searchRouter);

app.get("/", async (request, response) => {
    const myUrl = new URL("http://" + request.headers.host + request.url);
    console.log(request.method, ", ", request.url);

    if (!request.session.userId) {
        response.redirect("/login");
    }
    else {
        response.render("homepage", {});
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
