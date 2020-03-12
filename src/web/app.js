const config = require("./config");
const scrapeAll = require("./scrapeAll");
const T = require("./testAccounts");

scrapeAll(T, config);
