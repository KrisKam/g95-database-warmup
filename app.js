const express = require("express");
const app = express();
const host = process.env.PORT || 3000;
const queries = require("./queries");
const cors = require("cors")
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.json()); 

app.get("/", (req, res) => {
  queries.allStudents()
    .then(result => res.json({result: result}))
});

app.post("/", (req, res, next) => {
  queries.createStudent(req.body)
    .then(data => res.json({data}));
})

app.delete("/:id", (req, res, next) => {
  queries.deleting(req.params.id)
    .then(result => {
      return res.json({result})
    })
})

app.get("/:id", (req, res) => {
  queries.getStudent(req.params.id)
    .then(student => res.json({"student": student}))
})

app.listen(host, () => console.log(`Listening on port ${host}`));