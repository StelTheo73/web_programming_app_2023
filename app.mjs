import express from "express";

const app = express();

// const router = express.Router();

app.use(express.urlencoded({extended : false}));

app.get("/", (request, response) => {
    console.log("Home");
    response.send("Home");
    response.end();
});

// router.get("/about", (request, response) => {
//     console.log("About this app");
//     response.send("About this app");
//     response.end();
// });

// router.get("/random", (request, response) => {
//     console.log("random");
//     response.send("random text");
//     response.end();
// });

// app.use("/", router);

app.listen(3000, () => console.log("Listening to 3000"));