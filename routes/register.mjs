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
      const formData = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        birthdate: birthdate 
      };

      // Verify that user does not already exists
      const existingPersonId = await sessionAPI.getPersonIdFromEmail(email);
      if (existingPersonId.length > 0) {
        console.log("Email is already in use.");
        response.render("register", {
          register: true,
          inuse: true,
          formData: formData,
          layout: "authenticate",
        });
        return;
      }
      // Verify that fields does not contain forbidden characters
      try {
        RegisterParser.mainParser("email", email);
        RegisterParser.mainParser("password", password);
        RegisterParser.mainParser("firstname", firstname);
        RegisterParser.mainParser("lastname", lastname);
        RegisterParser.mainParser("phone", phone);
        RegisterParser.mainParser("birthdate", birthdate);
      } catch (error) {
        console.log("Input contains forbidden characters.");
        response.render("register", {
          layout: "authenticate",
          register: true,
          registrationFailed: true,
          formData: formData 
        });
        return;
      }
  
      const userData = {
        email,
        password,
        firstname,
        lastname,
        phone,
        birthdate,
      };
  
      await sessionAPI.insertOne("persons", userData);
  
      // const personId = await sessionAPI.userLogin(email, password);
  
      // if (personId) {
      //   request.session.userId = personId;
      //   request.session.lastAddress = [];
      //   request.session.addresses = [];
      //   request.session.addNewAddress = true;
      //   request.session.userItemsEdited = true;
      response.redirect("/login");
      // } else {
      //   response.render("register", {
      //     layout: "authenticate",
      //     register: true,
      //     registrationFailed: true,
      //     formData: formData
      //   });
      // }
    } catch (error) {
      console.log(error);
      response.render("internal-error", {
        layout: "error",
      });
    }
  });
  

export { registerRouter };
