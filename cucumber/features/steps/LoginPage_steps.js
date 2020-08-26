/* eslint-disable */
const { Given, When, Then } = require("cucumber");
const { By, until } = require("selenium-webdriver");
import { USERNAME, PASSWORD, EXPLICIT_TIMEOUT } from "../../fixtures/params";

const LOCATORS = {
  EMAIL: By.css("[name='email']"),
  PASSWORD: By.css("[name='password']"),
  // ACCEPT: By.xpath("//button[contains(text(), 'OK')]"),
  ACCEPT: By.xpath("//div[@class='swal2-actions']/button[1]"),
  // LOGOUT: By.className("fas fa-sign-out-alt"),
  LOGOUT: By.xpath("//i[@class='fas fa-sign-out-alt']"),
  SUBMIT: By.css("[type='submit']"),
  INVALID: By.xpath(
    "/html/body/app-root/app-login/div[2]/div[2]/div/div[1]/div/div[3]/form/div[1][contains(text(), 'Invalid Login or Password')]"
  ),
  EMAILREQUIRED: By.xpath("(//div[@class='invalid-feedback']//div)[1]"),
  PASSWORDREQUIRED:
    By.xpath("(//div[@class='invalid-feedback']//div)[2]").length > 0
      ? By.xpath("(//div[@class='invalid-feedback']//div)[2]")
      : By.xpath("//div[@class='invalid-feedback']//div"),
  INVALIDEMAIL: By.xpath("//div[@class='alert alert-danger']"),
  INVALIDPASSWORD: By.xpath("//div[@class='invalid-feedback']//div"),
};

const setUsername = async (driver, usename = USERNAME) => {
  await driver
    .wait(until.elementLocated(LOCATORS.EMAIL), EXPLICIT_TIMEOUT)
    .sendKeys(usename);
};

const setPassword = async (driver, password = PASSWORD) => {
  await driver
    .wait(until.elementLocated(LOCATORS.PASSWORD), EXPLICIT_TIMEOUT)
    .sendKeys(password);
};

When("Login with correct credentials", async function () {
  setUsername(this.webdriver);
  setPassword(this.webdriver);
  await this.chechDisplayed(LOCATORS.SUBMIT, "click");
});

When("The someone already connected alert is popped up", async function () {
  try {
    return await this.webdriver
      .wait(until.elementLocated(LOCATORS.ACCEPT), EXPLICIT_TIMEOUT)
      .click();
  } catch {
    return true;
  }
});

Then("The user is logged in", async function () {
  await this.chechDisplayed(LOCATORS.LOGOUT, "click");
});

When("Login with wrong password", async function () {
  setUsername(this.webdriver);
  setPassword(this.webdriver, "wrong password");
  await this.chechDisplayed(LOCATORS.SUBMIT, "click");
});

When("Login with wrong username", async function () {
  setUsername(this.webdriver, "wrongusername@gmail.com");
  setPassword(this.webdriver);
  await this.chechDisplayed(LOCATORS.SUBMIT, "click");
});

Then("The invalidAlert is popped up", async function () {
  await this.chechDisplayed(LOCATORS.INVALID);
});

When("Login with empty username and password", async function () {
  setUsername(this.webdriver, "");
  setPassword(this.webdriver, "");
  await this.chechDisplayed(LOCATORS.SUBMIT, "click");
});

Then("The required email alert is popped up", async function () {
  await this.chechDisplayed(LOCATORS.EMAILREQUIRED);
});

Then("The required password alert is popped up", async function () {
  await this.chechDisplayed(LOCATORS.PASSWORDREQUIRED);
});

When("Login with empty username and correct password", async function () {
  setUsername(this.webdriver, "");
  setPassword(this.webdriver);
  await this.chechDisplayed(LOCATORS.SUBMIT, "click");
});

When("Login with correct username and empty password", async function () {
  setUsername(this.webdriver);
  setPassword(this.webdriver, "");
  await this.chechDisplayed(LOCATORS.SUBMIT, "click");
});

When("Login with invalid username and correct password", async function () {
  setUsername(this.webdriver, "invalidusername");
  setPassword(this.webdriver);
  await this.chechDisplayed(LOCATORS.SUBMIT, "click");
});

When("Login with correct username and invalid password", async function () {
  setUsername(this.webdriver);
  setPassword(this.webdriver, "12345");
  await this.chechDisplayed(LOCATORS.SUBMIT, "click");
});

Then("The invalidEmail alert is popped up", async function () {
  await this.chechDisplayed(LOCATORS.INVALIDEMAIL);
});

Then("The invalidPassword alert is popped up", async function () {
  await this.chechDisplayed(LOCATORS.INVALIDPASSWORD);
});
