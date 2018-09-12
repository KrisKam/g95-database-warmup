const express = require("express");
const app = express();
const host = process.env.PORT || 3000;
const queries = require("./queries");
const cors = require("cors")

app.use(cors());

app.get("/", (req, res) => {
  queries.allStudents()
  .then(result => res.json({result: result}))
});

app.get("/:firstName", (req, res) => {
  console.log(req.params)
  queries.individualStudent(req.params.firstName)
  .then(student => res.json({"student": student}))
})

app.listen(host, () => console.log(`Listening on port ${host}`));