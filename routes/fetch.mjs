import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";

const fetchRouter = express.Router();

fetchRouter.get("/fetch/shops-per-city", async (request, response) => {
    console.log("fetch", request.query.city);
});
