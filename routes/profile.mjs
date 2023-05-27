import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { ObjectId } from 'mongodb';
import { RegisterParser } from "../controllers/registerParser.mjs";

const profileRouter = express.Router();
const sessionAPI = new SessionAPI();
sessionAPI.connect();

profileRouter.get("/profile", async (request, response) => {
  try {
    if (!request.session.userId) {
      response.redirect("/login");
    }
    else {
      let addNewAddress = false; // If true, user must provide one address from the UI
      let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
      request.session.userItemsEdited = false;

      const idValue = request.session.userId;
      const personId = new ObjectId(idValue[0]._id);

      const personData = await sessionAPI.getPersonData(personId);
      response.render("profile", {
        profile: true,
        personData,
        addNewAddress,
        userItemsEdited
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

profileRouter.post("/profile/submit", async (request, response) => {
  try {
    if (!request.session.userId) {
      response.redirect("/login");
    }
    else {
      let addNewAddress = false; // If true, user must provide one address from the UI
      let userItemsEdited = request.session.userItemsEdited; // If true, front-end JS must update local storage with the new values
      request.session.userItemsEdited = false;
      const userId = request.session.userId[0]._id;
  
      // Retrieve the updated form data from the request body
      const { email, password, firstname, lastname, phone, birthdate } = request.body;
      const personData = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        birthdate: birthdate
      }
  
      // Verify that user does not already exists
      const existingPersonId = await sessionAPI.getPersonIdFromEmail(email);
      if (existingPersonId.length > 0) {
        if (existingPersonId[0]._id.toString() !== userId) {
          console.log("Email is already in use.");
          response.render("profile", {
            profile: true,
            addNewAddress,
            userItemsEdited,
            personData,
            inuse: true,
            profileUpdateFailed: true
          });
          return;
        }
      }
      // Verify that fields does not contain forbidden characters
      try {
        RegisterParser.mainParser("email", email);
        RegisterParser.mainParser("password", password);
        RegisterParser.mainParser("firstname", firstname);
        RegisterParser.mainParser("lastname", lastname);
        RegisterParser.mainParser("phone", phone);
        RegisterParser.mainParser("birthdate", birthdate);
      }
      catch (error) {
        console.log("Input contains forbidden characters.");
        response.render("profile", {
          profile: true,
          addNewAddress,
          userItemsEdited,
          personData,
          profileUpdateFailed: true
        });
        return;
      }
  
      // Create the update object with the new data
      const updateData = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        birthdate: birthdate,
      };
  
      // Update the person's profile in the database
      await sessionAPI.updateProfile(userId, updateData);
  
      response.redirect("/profile");
    }
  }
  catch (error) {
    console.log(error);
    response.render("internal-error", {
      layout: "error",
    });
  }
});

export { profileRouter };
