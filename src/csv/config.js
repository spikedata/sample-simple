const path = require("path");

// TODO: inputs
const APIKEY = "00000000-0000-4000-a000-000000000001";
const USERKEY = "00000000-0000-4000-a000-000000000002";
const FILE = path.join(path.dirname(process.argv[1]), "../../data/abs1.csv");

module.exports = {
  APIKEY,
  USERKEY,
  FILE,
};
