import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// TODO: inputs
const APIKEY = "00000000-0000-4000-a000-000000000001";
const USERKEY = "00000000-0000-4000-a000-000000000002";
const FILE = path.join(__dirname, "../../data/example.pdf");
// const FILE = path.join(__dirname, "../../data/too-big.pdf"); // is sent, stopped by AWS
// const FILE = path.join(__dirname, "../../data/way-too-big.pdf"); // not sent, stopped by axios
const PASS = undefined;

export default {
  APIKEY,
  USERKEY,
  FILE,
  PASS
};
