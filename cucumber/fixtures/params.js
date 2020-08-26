require("dotenv").config();
// set browser url
export const BaseUrl = "https://devcloud.connectedio.com";

// set username and password
export const USERNAME = process.env.EMAIL;
export const { PASSWORD } = process.env;

// time to wait in milliseconds
export const EXPLICIT_TIMEOUT = 10000;

// set browser (chrome, firefox)
export const BROWSER_TYPE = "Chrome";

// set browser options (true, false)
export const HEADLESS = false;
