const express = require("express");
const app = express();
const host = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("The route worked.")
})

app.listen(host, () => console.log(`Listening on port ${host}`));