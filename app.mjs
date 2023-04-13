import express from "express";
import { engine } from "express-handlebars";

const app = express();
app.engine(".hbs", engine({extname : ".hbs"}));
app.set("view engine", ".hbs");


app.get("/", async (request, response) => {
    console.log("GET /")
    response.render("homepage", {});
});

app.use((request, response) => {
    console.log("Redirecting to /");
    response.redirect("/");
});

app.listen(3000, () => console.log("Listening on localhost:3000..."));
