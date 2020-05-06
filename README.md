# Spike API

Sample app demonstrating how to access Spike API. See full [docs](https://app.spikedata.co.za/docs/code/) online.

This sample runs all web functions using hardcoded login credentials

## Requirements

- [nodejs](https://nodejs.org/en/) v8+
  - async/await used

## Register

- First register for an account on [spike](https://app.spikedata.co.za/)
- Get your apikey and userkey from the [settings](https://app.spikedata.co.za/dash/settings/) page - you'll use them below

## How to run

```sh
git clone https://github.com/spikedata/sample-simple
cd sample-simple
npm i

# run pdf sample
vi ./src/pdf/config.js # enter your apikey & userkey
npm run start:pdf
# you may want to open ./data/example.pdf in a pdf viewer at this point and compare the output visually

# run all web samples
vi ./src/web/config.js # enter your apikey & userkey
vi ./src/web/testAccounts.js # enter your login credentials for one or more internet banking accounts
npm run start:web # run all sites configured in testAccounts.js
npm run start:web -- ned # run single site = nedbank (configured in testAccounts.js)
```
