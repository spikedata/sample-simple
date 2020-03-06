# Spike API

Sample app demonstrating how to access Spike API. See full [docs](https://app.spikedata.co.za/docs/code/) online.

This sample runs all web functions using hardcoded login credentials

## Register

- First register for an account on [spike](https://app.spikedata.co.za/)
- Get your apikey and userkey from the settings page - you'll use them below

## How to run

```sh
git clone https://github.com/spikedata/sample-simple
cd sample-simple
npm i

# run pdf sample
vi ./src/pdf/config.js # enter your apikey & userkey
npm run start:pdf

# run all web samples
vi ./src/web/config.js # enter your apikey & userkey
vi ./src/web/testAccounts.js # enter your login credentials for one or more internet banking accounts
npm run start:web
```
