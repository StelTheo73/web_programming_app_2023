import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { RegisterParser } from "../controllers/registerParser.mjs";

const registerRouter = express.Router();
const sessionAPI = new SessionAPI();
sessionAPI.connect();

registerRouter.get("/register", async (request, response) => {
    try {
      response.render("register", { register: true, layout: "authenticate" });
    } catch (error) {
      console.log(error);
      response.render("internal-error", {
        layout: "error",
      });
    }
});

registerRouter.post("/register/submit", async (request, response) => {
  try {
    const { email, password, firstname, lastname, phone, birthdate } = request.body;
    const existingPersonId = await sessionAPI.getPersonIdFromEmail(email);

    if (existingPersonId.length > 0) {
      console.log("Email is already in use.");
      response.render("register", {
        register: true,
        inuse: true,
        layout: "authenticate",
      });
      return;
    }

    let parsedPassword;
    try {
      // προσθεσε τον ιδιο ελεγχο για καθε πεδιο!
      // KANE ΤΟ ΙΔΙΟ ΚΑΙ ΣΤΗΝ ΕΠΕΞΕΡΓΑΣΙΑ ΤΟΥ ΠΡΟΦΙΛ!
      parsedPassword = RegisterParser.parseRegister(password);
    } catch (error) {
      console.log("Password contains forbidden characters.");
      response.render("register", {
        layout: "authenticate",
        register: true,
        registrationFailed: true
      });
      return;
    }

    const userData = {
      email,
      password: parsedPassword,
      firstname,
      lastname,
      phone,
      birthdate,
    };

    await sessionAPI.insertOne("persons", userData);

    const personId = await sessionAPI.userLogin(email, password);

    if (personId) {
      request.session.userId = personId;
      request.session.lastAddress = [];
      request.session.addresses = [];
      request.session.addNewAddress = true;
      request.session.userItemsEdited = true;
      response.redirect("/");
    }
    else {
      response.render("register", {
        layout: "authenticate",
        register: true,
        registrationFailed: true
      });
    }
  } 
  catch (error) {
    console.log(error);
    response.render("internal-error", {
      layout: "error",
    });
  }
});


export { registerRouter };
