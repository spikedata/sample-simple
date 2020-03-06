const chalk = require("chalk");
const config = require("./config");
const scrape = require("./scrape");
const T = require("./testAccounts");

function printHeader(site) {
  console.log(
    chalk.greenBright("---------------------------------------------------")
  );
  console.log(chalk.greenBright(site));
  console.log(
    chalk.greenBright("---------------------------------------------------")
  );
}

async function run({ APIKEY, USERKEY, NUM_DAYS, NUM_STATEMENTS, SAVE_FOLDER }) {
  if (T.abs) {
    printHeader("ABS.0");
    await scrape(
      APIKEY,
      USERKEY,
      "ABS.0",
      T.abs.user,
      T.abs.pin,
      T.abs.pass,
      T.abs.usernum,
      T.abs.accountNumber,
      NUM_DAYS,
      NUM_STATEMENTS,
      SAVE_FOLDER
    );
  }

  if (T.cap) {
    printHeader("CAP.0");
    await scrape(
      APIKEY,
      USERKEY,
      "CAP.0",
      T.cap.user,
      T.cap.pin,
      T.cap.pass,
      T.cap.usernum,
      T.cap.accountNumber,
      NUM_DAYS,
      NUM_STATEMENTS,
      SAVE_FOLDER
    );
  }

  if (T.fnb) {
    printHeader("FNB.0");
    await scrape(
      APIKEY,
      USERKEY,
      "FNB.0",
      T.fnb.user,
      T.fnb.pin,
      T.fnb.pass,
      T.fnb.usernum,
      T.fnb.accountNumber,
      NUM_DAYS,
      NUM_STATEMENTS,
      SAVE_FOLDER
    );
  }

  if (T.ned) {
    printHeader("NED.0");
    await scrape(
      APIKEY,
      USERKEY,
      "NED.0",
      T.ned.user,
      T.ned.pin,
      T.ned.pass,
      T.ned.usernum,
      T.ned.accountNumber,
      NUM_DAYS,
      NUM_STATEMENTS,
      SAVE_FOLDER
    );
  }

  if (T.rmb) {
    printHeader("RMB.0");
    await scrape(
      APIKEY,
      USERKEY,
      "RMB.0",
      T.rmb.user,
      T.rmb.pin,
      T.rmb.pass,
      T.rmb.usernum,
      T.rmb.accountNumber,
      NUM_DAYS,
      NUM_STATEMENTS,
      SAVE_FOLDER
    );
  }

  if (T.std) {
    printHeader("STD.2018-01");
    await scrape(
      APIKEY,
      USERKEY,
      "STD.2018-01",
      T.std.user,
      T.std.pin,
      T.std.pass,
      T.std.usernum,
      T.std.accountNumber,
      NUM_DAYS,
      NUM_STATEMENTS,
      SAVE_FOLDER
    );
  }
}

run(config);
