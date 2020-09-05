/* eslint-disable */
const { Given, When, Then } = require("cucumber");
const { By, until } = require("selenium-webdriver");
const { expect } = require("chai");
import {EXPLICIT_TIMEOUT, PASSWORD} from "../../fixtures/params";

const LOCATORS = {
  USERS: By.css("i.fa.fa-users"),
  QUICK_ACTIONS: By.xpath("//button[@class='btn btn-default btn-sm dropdown-toggle dropdown-toggle']"),
  ADD_MENU: By.css("i.fa.fa-user-plus"), // By.css("a.dropdown-item.ng-star-inserted"),
  FIRST_NAME: By.css("input.form-control.ng-pristine.ng-invalid.ng-touched"),
  LAST_NAME: By.xpath("//input[@formcontrolname='lastName']"),
  EMAIL: By.xpath("//input[@formcontrolname='email']"),
  TELEPHONE: By.xpath("//input[@formcontrolname='telephone']"),
  SELECT_ROLE: By.id("role"),
  ADDRESS_1: By.xpath("//input[@formcontrolname='address1']"),
  ADDRESS_2: By.xpath("//input[@formcontrolname='address2']"),
  CITY: By.xpath("//input[@formcontrolname='city']"),
  ZIP_CODE: By.xpath("//input[@formcontrolname='zipCode']"),
  COUNTRY: By.xpath("//select[@formcontrolname='country']"),
  STATE: By.xpath("//select[@formcontrolname='state']"),
  ADD_BTN: By.css("button.btn.btn-sm.btn-primary.px-4.py-2.text-uppercase"),
  USERS_VERIFY: By.css("a.text-primary.ng-star-inserted")
};

When("Filled out all fields and choosen drop-down menues", async function () {
// 0. userMenu.click();
  await this.chechDisplayed(LOCATORS.USERS, "click");

// 1. quickActionButton.click();
  await this.chechDisplayed(LOCATORS.QUICK_ACTIONS, "click");

// 2. addMenu.click();
  await this.chechDisplayed(LOCATORS.ADD_MENU, "click");

// 3. firstNameField.sendKeys("Roman");
const setFirstname = async (driver, Firstname = FIRSTNAME) => {
  await driver
    .wait(until.elementLocated(LOCATORS.FIRST_NAME), EXPLICIT_TIMEOUT)
    .sendKeys("Roman");
};

// 4. lastName.sendKeys("Ivanov");
const setLastname = async (driver, Lastname = LASTNAME) => {
  await driver
    .wait(until.elementLocated(LOCATORS.LAST_NAME), EXPLICIT_TIMEOUT)
    .sendKeys("Ivanov");
};

// 5. emailField.sendKeys("vikauser3@mailinator.com");
const setEmail = async (driver, Email = EMAIL) => {
  await driver
    .wait(until.elementLocated(LOCATORS.EMAIL), EXPLICIT_TIMEOUT)
    .sendKeys("vikauser3@mailinator.com");
};

// 6. telephoneField.sendKeys("7895678956");
const setTelephone = async (driver, Telephone = TELEPHONE) => {
  await driver
    .wait(until.elementLocated(LOCATORS.TELEPHONE), EXPLICIT_TIMEOUT)
    .sendKeys("7895678956");
 };

// 7. selectRole.selectByVisibleText("user");
const setRole = async (driver, Role = ROLE) => {
  await driver
    .wait(until.elementLocated(LOCATORS.SELECT_ROLE), EXPLICIT_TIMEOUT)
    .sendKeys("admin");
};

// 8. addressLine1Field.sendKeys("1933, 84 street");
const setAddress1 = async (driver, Address1  = ADDRESS_1) => {
  await driver
    .wait(until.elementLocated(LOCATORS.ADDRESS_1), EXPLICIT_TIMEOUT)
    .sendKeys("1933, 84 street");
};

// 9. cityField.sendKeys("Brooklyn");
const setAddress2 = async (driver, Address2  = ADDRESS_2) => {
  await driver
    .wait(until.elementLocated(LOCATORS.ADDRESS_2), EXPLICIT_TIMEOUT)
    .sendKeys("Brooklyn");
  };

// 10. zipField.sendKeys("11214");
const setZip = async (driver, Zip  = Zip) => {
  await driver
      .wait(until.elementLocated(LOCATORS.ZIP_CODE), EXPLICIT_TIMEOUT)
      .sendKeys("11214");
  };

// 11. countryMenu.selectByVisibleText("United States");
const setCountry = async (driver, Country  = COUNTRY) => {
  await driver
      .wait(until.elementLocated(LOCATORS.COUNTRY), EXPLICIT_TIMEOUT)
      .sendKeys("United States");
};

// 12. stateMenu.selectByVisibleText("New York");
const setState = async (driver, State  = STATE) => {
  await driver
      .wait(until.elementLocated(LOCATORS.STATE), EXPLICIT_TIMEOUT)
      .sendKeys("New York");
};

// 13. addButton.click();
  await this.chechDisplayed(LOCATORS.ADD_BTN, "click");

});

// Then("Verify User was added", async function () {
//   await this.chechDisplayed(LOCATORS.USERS_VERIFY).getText();
//
// });