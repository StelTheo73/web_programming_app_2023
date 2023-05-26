import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { RegisterParser } from "../controllers/registerParser.mjs";

const registerRouter = express.Router();
const sessionAPI = new SessionAPI();
sessionAPI.connect();

registerRouter.get("/register", async (request, response) => {
    try {
      let addNewAddress = false; // If true, user must provide one address from the UI
      let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
      request.session.userItemsEdited = false;
  
      response.render("register", { register: true, layout: "authenticate", userItemsEdited });
    } catch (error) {
      console.log(error);
      response.render("internal-error", {
        layout: "error",
      });
    }
});

registerRouter.post("/register/submit", async (request, response) => {
  try {
    // Retrieve the form data from the request body
    const { email, password, firstname, lastname, phone, birthdate } = request.body;

    // Check if email is already registered
    const existingPersonId = await sessionAPI.getPersonIdFromEmail(email);

    if (existingPersonId.length > 0) {
      // Email is already in use, redirect back to the registration form with an error message
      console.log("Email is already in use.");
      await response.render("register", {
        inuse: true, // Set the inuse variable to true
        layout: "authenticate",
      });
      return;
    }

    // Parse the password field using the RegisterParser class
    let parsedPassword;
    try {
      parsedPassword = RegisterParser.parseRegister(password);
    } catch (error) {
      // Password contains forbidden characters, redirect back to the registration form with the parser flag
      console.log("Password contains forbidden characters.");
      await response.render("register", {
        parser: true, // Set the parser variable to true
        layout: "authenticate",
      });
      return;
    }

    // Create an object with the parsed form data
    const userData = {
      email,
      password: parsedPassword,
      firstname,
      lastname,
      phone,
      birthdate,
    };

    // Handle the registration logic and database operations
    await sessionAPI.insertOne("persons", userData); // Replace "persons" with your collection name

    // Login the user
    const personId = await sessionAPI.userLogin(email, password);

    if (personId) {
      // Set the user session
      request.session.userId = personId;

      // Redirect to the home page
      response.redirect("/");
    }
  } catch (error) {
    console.log(error);
    response.render("internal-error", {
      layout: "error",
    });
  }
});


export { registerRouter };
