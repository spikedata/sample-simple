const path = require("path");

// TODO: inputs
const APIKEY = "00000000-0000-4000-a000-000000000001";
const USERKEY = "00000000-0000-4000-a000-000000000002";
const FILE = path.join(path.dirname(process.argv[1]), "../../data/example.pdf");
// const FILE = path.join(path.dirname(process.argv[1]), "../../data/too-big.pdf"); // is sent, stopped by AWS
// const FILE = path.join(path.dirname(process.argv[1]), "../../data/way-too-big.pdf"); // not sent, stopped by axios
const PASS = undefined;

module.exports = {
  APIKEY,
  USERKEY,
  FILE,
  PASS
};
