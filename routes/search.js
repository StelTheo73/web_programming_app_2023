const express = require("express");

const router = express.Router();

router.get("/templates/submit-search/:query", (request, response) => {
    const myUrl = new URL("http://" + request.headers.host + request.url);
    console.log(request.method, ", ", request.url, "query: ", myUrl.searchParams.get(""));
})

module.exports = router;