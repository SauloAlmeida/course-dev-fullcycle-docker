import express from "express";
import { generateName } from "./services/name-service.js";
import { insertPeople, getPeopleNamesAsync } from "./data/repository.js";

const PORT = 4000;
const app = express();

app.get("/", async (req, res) => {
  insertPeople(generateName());
  const names = await getPeopleNamesAsync();
  const html = formatNamesToHtml(names);
  res.send(html);
});

function formatNamesToHtml(names) {
  let html = "<h1>Full Cycle Rocks!</h1> <br/>";
  html += "<ul>";
  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    html += `<li>${name}</li>`;
  }
  html += "</ul>";
  return html;
}

app.listen(PORT, () => console.log(`API running at port: ${PORT}`));
