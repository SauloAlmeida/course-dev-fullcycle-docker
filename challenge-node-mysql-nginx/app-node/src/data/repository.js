import mysql from "mysql";
import util from "util";

const configuration = {
  host: "database",
  user: "root",
  password: "root",
  database: "appdb",
};

const con = mysql.createConnection(configuration);
const queryAsync = util.promisify(con.query).bind(con);

function insertPeople(name) {
  con.query(`INSERT INTO people(name) VALUES ('${name}');`);
}

async function getPeopleNamesAsync() {
  const rows = await queryAsync("SELECT name FROM people;");
  return rows?.map((rowData) => rowData.name);
}

export { insertPeople, getPeopleNamesAsync };
