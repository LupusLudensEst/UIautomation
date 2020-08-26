/* eslint-disable */
import { writeFileSync, writeFile } from "fs";
import { AfterAll, After, Status } from "cucumber";

const output = [];

After(async function (scenario) {
  output.push(scenario);
  // take a screenshot on failure
  if (scenario.result.status === Status.FAILED) {
    try {
      const screenshot = await this.webdriver.takeScreenshot();
      const base64Data = screenshot.replace(/^data:image\/png;base64,/, "");
      writeFileSync(
        `./images/${scenario.pickle.name}.png`,
        base64Data,
        "base64"
      );
    } catch (err) {
      throw Error(err);
    }
  }
  await this.webdriver.quit();
});

AfterAll("end", async function () {
  writeFile("./reports/data.json", JSON.stringify(output), (err) => {
    if (err) console.log(err);
  });
});
