/* eslint-disable */
const { Given, When, Then, AfterAll } = require("cucumber");
import LoginPage from "../../pages/LoginPage";

Given("I am on the Login page", async function () {
  await LoginPage.openURL();
});

When("Login with correct credentials", async function () {
  await LoginPage.setUsername();
  await LoginPage.setPassword();
  await LoginPage.submit();
});

Then("The user is logged in", async function () {
  await LoginPage.isPopUp();
  await LoginPage.isLoggedIn();
});

When("Login with wrong password", async function () {
  await LoginPage.setUsername("dsmirnov@gmail.com");
  await LoginPage.setPassword();
  await LoginPage.submit();
});

When("Login with wrong username", async function () {
  await LoginPage.setUsername();
  await LoginPage.setPassword("wrongpassword");
  await LoginPage.submit();
});

Then("The invalidAlert is popped up", async function () {
  await LoginPage.invalidCredentialsAlert();
});

When("Login with empty username and password", async function () {
  await LoginPage.setUsername("");
  await LoginPage.setPassword("");
  await LoginPage.submit();
});

Then("The required email alert is popped up", async function () {
  await LoginPage.requiredEmail();
});

Then("The required password alert is popped up", async function () {
  await LoginPage.requiredPassword();
});

When("Login with empty username and correct password", async function () {
  await LoginPage.setUsername("");
  await LoginPage.setPassword();
  await LoginPage.submit();
});

When("Login with correct username and empty password", async function () {
  await LoginPage.setUsername();
  await LoginPage.setPassword("");
  await LoginPage.submit();
});

When("Login with invalid username and correct password", async function () {
  await LoginPage.setUsername("test@com");
  await LoginPage.setPassword();
  await LoginPage.submit();
});

When("Login with correct username and invalid password", async function () {
  await LoginPage.setUsername();
  await LoginPage.setPassword("12345");
  await LoginPage.submit();
});

Then("The invalidEmail alert is popped up", async function () {
  await LoginPage.invalidEmail();
});

Then("The invalidPassword alert is popped up", async function () {
  await LoginPage.invalidPassword();
});

AfterAll("end", function () {
  LoginPage.closeSession();
});
