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
    console.log("is? ", personId.length);

    if (personId.length) {
        request.session.userId = personId;
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
