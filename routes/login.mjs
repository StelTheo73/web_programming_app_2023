import express from "express";
import { SessionAPI } from "../services/database_IO/sessionAPI.mjs";

const loginRouter = express.Router();
const sessionAPI = new SessionAPI();

loginRouter.get("/login", async (request, response) => {
    if (request.session.userId) {
        response.redirect("/logout");
    }
    response.render("login", {layout: "authenticate"});
});

loginRouter.post("/login/submit", async (request, response) => {
    const email = String(request.body.email);
    const pwd = String(request.body.password);
    const personId = await sessionAPI.userLogin(email, pwd);
    
    console.log("Person Id:", personId);

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

});

loginRouter.get('/logout', (request, response) => {
    request.session.destroy(err => {
      if (err) {
        console.error('Error destroying session:', err);
      }
    });
    response.redirect('/login');
  });

export { loginRouter };
