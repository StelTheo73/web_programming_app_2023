import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";

const loginRouter = express.Router();
const sessionAPI = new SessionAPI();

loginRouter.get("/login", async (request, response) => {
    if (request.session.userId) {
        response.redirect("/logout");
    }
    response.render("login",
      {
        layout: "authenticate"
      }
    );
});

loginRouter.post("/login/submit", async (request, response) => {
  try {
    const email = String(request.body.email);
    const pwd = String(request.body.password);
    const personId = await sessionAPI.userLogin(email, pwd);
    console.log(personId)
    if (personId.length) {
        request.session.userId = personId;
        let lastAddress = await sessionAPI.getLastAddress(request.session.userId[0]._id);
        let addresses = await sessionAPI.getPersonAddresses(request.session.userId[0]._id);
  
        request.session.addNewAddress = false;
        if (Object.keys(lastAddress).length === 0 || addresses.length === 0) {
          lastAddress = {};
          addresses = [];
          request.session.addNewAddress = true;
        }
  
        request.session.lastAddress = lastAddress;
        request.session.addresses = addresses;
        request.session.userItemsEdited = true;
  
        response.redirect("/");
    }
    else {
        response.send("Failed to login.");
        response.end();
    }
  }
  catch (error) {
    console.log(error)
    response.render("internal-error",
        {
            layout : "error"    
        }
    );
  }
});

loginRouter.get('/logout', (request, response) => {
  try {
    request.session.destroy();
    response.redirect('/login');
  }
  catch (error) {
    console.log(error)
    response.render("internal-error",
        {
            layout : "error"    
        }
    );
  }
});

export { loginRouter };
