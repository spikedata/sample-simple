const config = require("./config");
let spikeApi = require("@spikedata/api");

// HACK: for webpack'ed ./dist/pdf/app.js
// - when require()d in src app (./sample-simple/src/pdf/app.js) uses `main` = `@spikedata/api/src/main.js`
// - when require()d in webpacked app (./sample-simple/dist/pdf/app.js) uses `module` = @spikedata/api/dist/spike-api.esm.mjs`
// - see `npm run build`
if (spikeApi.default) {
  spikeApi = spikeApi.default;
}

async function run({ APIKEY, USERKEY, FILE, PASS }) {
  try {
    // request
    console.log(`requesting ${spikeApi.config.url.pdf} ...`);
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
    if (e instanceof spikeApi.PdfTooLargeError) {
      console.error(`EXCEPTION: the pdf is too large`);
    } else if (e instanceof spikeApi.InputValidationError) {
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

run(config);
