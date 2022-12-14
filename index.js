const { Pool } = require("pg");
const pool = new Pool();

async function main() {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT NOW();");
    console.log("OK:", res.rows[0]);
  } catch (err) {
    console.log(err?.stack);
  }
  client.release();
  pool.end();
}
//Function to add tableware
// async function createTableware(name, qty) {
//   await pool.query("INSERT INTO tableware(name, qty) VALUES ($1, $2)", [
//     name,
//     qty,
//   ]);
//   return;
// }
// createTableware("Pieni lautanen", 40);

async function readAllTableware() {
  const res = await pool.query("SELECT * FROM tableware");
  console.log(res.rows);
}
readAllTableware();
//Function to add offices
// async function addOffice(name, location, starting_year) {
//   await pool.query(
//     "INSERT INTO office(name, location, starting_year)VALUES ($1, $2, $3)",
//     [name, location, starting_year]
//   );
//   return;
// }
// addOffice("Academy Germany", "Munchen", 2018);

// async function updateTableware(id){
//   await pool.query("UPDATE tableware set ")
// }
main();
