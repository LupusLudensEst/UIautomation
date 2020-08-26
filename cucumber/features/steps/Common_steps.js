/* eslint-disable */
import { EXPLICIT_TIMEOUT, BaseUrl } from "../../fixtures/params";
const { expect } = require("chai");
const { Given, When, Then } = require("cucumber");
const { By, until } = require("selenium-webdriver");

Given("I am on the {string} page", async function (page) {
  await this.webdriver.get(BaseUrl + page);
  await this.webdriver.wait(until.urlIs(BaseUrl + page));
});

