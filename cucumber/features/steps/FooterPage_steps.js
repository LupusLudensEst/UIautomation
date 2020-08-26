/* eslint-disable */
const { Given, When, Then } = require("cucumber");
const { By, until } = require("selenium-webdriver");
const { expect } = require("chai");
import { EXPLICIT_TIMEOUT } from "../../fixtures/params";

const LOCATORS = {
  COPYRIGHT: By.xpath("//*[@id='footerLeftSide']/div/p"),
  LINK: By.xpath("//a[@class='text-white']"),
  POLICY: By.xpath("//*[@id='footerLeftSide']/div[2]/ul/li[1]/a"),
  TERMS: By.xpath("//*[@id='footerLeftSide']/div[2]/ul/li[2]/a"),
};

When("Year on footer matching with the current year", async function () {
  const year = await this.webdriver
    .wait(until.elementLocated(LOCATORS.COPYRIGHT), EXPLICIT_TIMEOUT)
    .getText();
  expect(Number(year.slice(2, 7))).to.be.equal(new Date().getFullYear());
});

When("The website link should be {string}", async function (link) {
  const currentLink = await this.webdriver
    .wait(until.elementLocated(LOCATORS.LINK), EXPLICIT_TIMEOUT)
    .getAttribute("href");
  expect(currentLink).to.be.equal(link);
});

When("The policy link should be {string}", async function (link) {
  const currentLink = await this.webdriver
    .wait(until.elementLocated(LOCATORS.POLICY), EXPLICIT_TIMEOUT)
    .getAttribute("href");
  expect(currentLink).to.be.equal(link);
});

When("The terms link should be {string}", async function (link) {
  const currentLink = await this.webdriver
    .wait(until.elementLocated(LOCATORS.TERMS), EXPLICIT_TIMEOUT)
    .getAttribute("href");
  expect(currentLink).to.be.equal(link);
});