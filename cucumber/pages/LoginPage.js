// const { expect } = require("chai");
import BasePage from "../fixtures/BasePage";
import { USERNAME, PASSWORD, EXPLICIT_TIMEOUT } from "../fixtures/params";

const { By, until } = require("selenium-webdriver");

const LOCATORS = {
  EMAIL: By.css("[name='email']"),
  PASSWORD: By.css("[name='password']"),
  ACCEPT: By.xpath("//button[contains(text(), 'OK')]"),
  LOGOUT: By.className("fas fa-sign-out-alt"),
  SUBMIT: By.css("[type='submit']"),
  INVALID: By.xpath(
    "/html/body/app-root/app-login/div[2]/div[2]/div/div[1]/div/div[3]/form/div[1][contains(text(), 'Invalid Login or Password')]",
  ),
  EMAILREQUIRED: By.xpath("(//div[@class='invalid-feedback']//div)[1]"),
  PASSWORDREQUIRED:
    By.xpath("(//div[@class='invalid-feedback']//div)[2]").length > 0
      ? By.xpath("(//div[@class='invalid-feedback']//div)[2]")
      : By.xpath("//div[@class='invalid-feedback']//div"),
  INVALIDEMAIL: By.xpath("//div[@class='alert alert-danger']"),
  INVALIDPASSWORD: By.xpath("//div[@class='invalid-feedback']//div"),
};

class LoginPage extends BasePage {
  constructor(pageUrl) {
    super(pageUrl);
    this.pageUrl = "/login";
  }

  async setUsername(usename = USERNAME) {
    await this.driver
      .wait(until.elementLocated(LOCATORS.EMAIL), EXPLICIT_TIMEOUT)
      .sendKeys(usename);
  }

  async setPassword(password = PASSWORD) {
    await this.driver
      .wait(until.elementLocated(LOCATORS.PASSWORD), EXPLICIT_TIMEOUT)
      .sendKeys(password);
  }

  async isPopUp() {
    try {
      return await this.driver
        .wait(until.elementLocated(LOCATORS.ACCEPT), EXPLICIT_TIMEOUT)
        .click();
    } catch {
      return true;
    }
  }

  async isLoggedIn() {
    await this.chechDisplayed(LOCATORS.LOGOUT, "click");
  }

  async invalidCredentialsAlert() {
    await this.chechDisplayed(LOCATORS.INVALID);
  }

  async requiredEmail() {
    await this.chechDisplayed(LOCATORS.EMAILREQUIRED);
  }

  async requiredPassword() {
    await this.chechDisplayed(LOCATORS.PASSWORDREQUIRED);
  }

  async invalidEmail() {
    await this.chechDisplayed(LOCATORS.INVALIDEMAIL);
  }

  async invalidPassword() {
    await this.chechDisplayed(LOCATORS.INVALIDPASSWORD);
  }

  async submit() {
    await this.chechDisplayed(LOCATORS.SUBMIT, "click");
  }

  // async clearCookies() {
  //   await this.driver.manage().deleteAllCookies();
  //   await this.driver.navigate().refresh();
  // }
}

export default new LoginPage();
