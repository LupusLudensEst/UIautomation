/* eslint-disable */
import { writeFile } from "fs";
import { After, AfterAll } from "cucumber";

const output = [];

After(async function (scenario) {
  output.push(scenario);
});

AfterAll("end", function () {
  writeFile("./reports/data.json", JSON.stringify(output), (err) => {
    if (err) console.log(err);
  });
});
