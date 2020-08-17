/* eslint-disable */
const fs = require("fs");
const { After, AfterAll } = require("cucumber");

const output = [];

After(async function (scenario) {
  output.push(scenario);
});

AfterAll("end", function () {
  fs.writeFile("./reports/data.json", JSON.stringify(output), (err) => {
    if (err) console.log(err);
  });
});
