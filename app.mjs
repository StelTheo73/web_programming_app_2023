import express from "express";
import { engine } from "express-handlebars";

import { ordersRouter } from "./routes/orders.mjs";
import { addressRouter } from "./routes/addresses.mjs";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended : false}));

app.engine(".hbs", engine({extname : ".hbs"}));
app.set("view engine", ".hbs");

// Routers
app.use("/", ordersRouter);
app.use("/", addressRouter);

app.get("/", async (request, response) => {
    const myUrl = new URL("http://" + request.headers.host + request.url);
    console.log(request.method, ", ", request.url);
    response.render("homepage", {});
});

app.post("/search", async (request, response) => {
    console.log(request.body);
    const myUrl = new URL("http://" + request.headers.host + request.url);
    console.log(request.method, ", ", request.url);

    response.send(request.body);
    response.end();
});

app.use((request, response) => {
    console.log("Redirect from ", request.url);
    console.log(request.method, ", ", request.url);
    response.redirect("/");
});

app.listen(3000, () => console.log("Listening on localhost:3000..."));
