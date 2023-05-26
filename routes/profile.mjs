import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";
import { ObjectId } from 'mongodb';

const profileRouter = express.Router();
const sessionAPI = new SessionAPI();
sessionAPI.connect();

profileRouter.get("/profile", async (request, response) => {
  profile :true ;
  try {
    
    let addNewAddress = false;
    let userItemsEdited = request.session.userItemsEdited;
    request.session.userItemsEdited = false;

    const idValue = request.session.userId;
    const personId = new ObjectId(idValue[0]._id);

    const personData = await sessionAPI.getPersonData(personId);
    response.render("profile", { profile: true, userItemsEdited, personData });
  } catch (error) {
    console.log(error);
    response.render("internal-error", {
      layout: "error",
    });
  }
});

profileRouter.post("/profile/submit", async (request, response) => {
    try {
      const idValue = request.session.userId[0]._id;
  
      // Retrieve the updated form data from the request body
      const { email, password, firstname, lastname, phone, birthdate } = request.body;
  
      // Create the update object with the new data
      const updateData = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        birthdate: birthdate,
      };
  
      // Console log the updateData object
      // console.log("Update Data:", updateData);
      // console.log("ID Value:", idValue);
      // Update the person's profile in the database
      console.log(await sessionAPI.updateProfile("persons", idValue, updateData));
      
      // Redirect to a success page or any other desired action
      response.redirect("/profile");
    } catch (error) {
      console.log(error);
      response.render("internal-error", {
        layout: "error",
      });
    }
  });
  
  

export { profileRouter };
