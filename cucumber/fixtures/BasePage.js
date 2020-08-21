import {
  EXPLICIT_TIMEOUT, BaseUrl, BROWSER_TYPE, HEADLESS,
} from "./params";

const fs = require("fs");

const webdriver = require("selenium-webdriver");
const { until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");

// set custom wait time between tests
const { setDefaultTimeout } = require("cucumber");

setDefaultTimeout(60 * 600);

const chromeOptions = new chrome.Options();
const firefoxOptions = new firefox.Options();

if (HEADLESS) {
  chromeOptions.addArguments("headless");
  chromeOptions.addArguments("no-sandbox");
  chromeOptions.addArguments("whitelisted-ips 0.0.0.0");
  chromeOptions.addArguments("disable-gpu");
  firefoxOptions.addArguments("headless");
  firefoxOptions.addArguments("no-sandbox");
  firefoxOptions.addArguments("whitelisted-ips 0.0.0.0");
  firefoxOptions.addArguments("disable-gpu");
}

const getBrowser = () => {
  if (BROWSER_TYPE.toLowerCase().search("chrome") === 0) {
    return new webdriver.Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
  }
  if (BROWSER_TYPE.toLowerCase().search("firefox") === 0) {
    return new webdriver.Builder()
      .forBrowser("firefox")
      .setFirefoxOptions(firefoxOptions)
      .build();
  }
  throw TypeError(`Sorry ${BROWSER_TYPE} browser is NOT supported`);
};

export default class BasePage {
  constructor() {
    this.driver = getBrowser();
    this.driver.manage().window().maximize();
    this.pageUrl = null;
  }

  async openURL() {
    await this.driver.get(BaseUrl + this.pageUrl);
    await this.driver.wait(until.urlIs(BaseUrl + this.pageUrl));
  }

  async closeSession() {
    await this.driver.quit();
  }

  async chechDisplayed(locator, action = "isDisplaed") {
    if (typeof action === "string") {
      if (action === "isDisplaed") {
        try {
          await this.driver
            .wait(until.elementLocated(locator), EXPLICIT_TIMEOUT)
            .isDisplayed();
        } catch {
          throw ReferenceError(`The "${locator}" locator wasn't found.`);
        }
      } else if (action === "click") {
        try {
          await (
            await this.driver.wait(
              until.elementLocated(locator),
              EXPLICIT_TIMEOUT,
            )
          ).click();
        } catch {
          throw ReferenceError(`The "${locator}" locator wasn't found.`);
        }
      } else {
        throw TypeError(
          `"action" must be rather "isDisplaed" or "click" but got "${action}"`,
        );
      }
    } else {
      throw TypeError(`"action" must be a "string" but got "${typeof action}"`);
    }
  }

  async takeScreenShot(name) {
    try {
      const screenshot = await this.driver.takeScreenshot();
      const base64Data = screenshot.replace(/^data:image\/png;base64,/, "");
      fs.writeFileSync(`./images/${name}.png`, base64Data, "base64");
    } catch (err) {
      throw Error(err);
    }
  }
}
