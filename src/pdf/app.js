const path = require("path");
let spikeApi = require("@spikedata/api");

// HACK: for webpack'ed ./dist/pdf/app.js
if (spikeApi.default) {
  spikeApi = spikeApi.default;
}

// TODO: inputs
const APIKEY = "00000000-0000-4000-a000-000000000001";
const USERKEY = "00000000-0000-4000-a000-000000000002";
const FILE = path.join(path.dirname(process.argv[1]), "../../data/example.pdf");
// const FILE = path.join(path.dirname(process.argv[1]), "../../data/too-big.pdf"); // is sent, stopped by AWS
// const FILE = path.join(path.dirname(process.argv[1]), "../../data/way-too-big.pdf"); // not sent, stopped by axios
const PASS = undefined;

async function run() {
  try {
    // request
    console.log("requesting /pdf ...");
    let spikeResponse = await spikeApi.pdf(APIKEY, USERKEY, FILE, PASS);

    // process response
    if (spikeResponse.type === spikeApi.enums.TYPES.SUCCESS) {
      console.log("JSON", JSON.stringify(spikeResponse, null, 2));
      console.log("SUCCESS");
    } else {
      console.error(
        "ERROR:",
        spikeApi.enums.TYPES.toString(spikeResponse.type) +
          ":" +
          spikeResponse.code
      );
    }
  } catch (e) {
    if (e instanceof SpikeApi.PdfTooLargeError) {
      console.error(`EXCEPTION: the pdf is too large`);
      return e;
    } else if (e instanceof SpikeApi.InputValidationError) {
      console.error(
        "EXCEPTION: invalid inputs:\n ",
        e.validationErrors.join("\n ")
      );
    } else {
      if (!e.response) {
        // net connection error (e.g. down, timeout) or > axios maxBodyLength limit
        // e : AxiosResponse
        console.error("EXCEPTION: net connection error:", e.code || e.message);
      } else {
        // http status error (e.g. 500 internal server error, 413 too big)
        // e : AxiosResponse
        console.error(
          "EXCEPTION: http status error:",
          e.response.status,
          e.response.statusText
        );
      }
    }
  }
}

run();
