const dbConnection = require("./knexfile")[process.env.NODE_ENV || "development"];
const knex = require("knex")(dbConnection);


const allStudents = () => knex.select().from("students");
const individualStudent = (id) => knex.select().from("students").where("firstName", id);

module.exports = {

  allStudents,
  individualStudent

}