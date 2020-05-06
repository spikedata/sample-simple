const config = require("./config");
const scrapeAll = require("./scrapeAll");
let T = require("./testAccounts");

// run on single site e.g.
//  - npm run start:web -- ned
//  - node ./src/web/app.js ned
if (process.argv.length === 3) {
  let key = process.argv[2];
  if (!T[key]) {
    console.error("site not found:", key);
    process.exit(-1);
  }
  T = {
    [key]: T[key],
  };
}

scrapeAll(T, config);
