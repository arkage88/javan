const { defineConfig } = require("cypress");
require("dotenv").config();

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 15000,
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      return config;
    },

    // readXlsx: require("./read-xlsx"),
    specPattern: "cypress/e2e/feature/**/*.{js,ts,feature}",
    // baseUrl: "https://www.saucedemo.com/",
    // experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    // experimentalModifyObstructiveThirdPartyCode: true,
    // experimentalOriginDependencies: true,
    video: false,
    screenshotOnRunFailure: true,
  },
  // env: {
  //   auth0_username: process.env.AUTH0_USERNAME,
  //   auth0_password: process.env.AUTH0_PASSWORD,
  //   auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
  //   auth0_audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  //   auth0_scope: process.env.REACT_APP_AUTH0_SCOPE,
  //   auth0_client_id: process.env.REACT_APP_AUTH0_CLIENTID,
  //   auth0_client_secret: process.env.AUTH0_CLIENT_SECRET
  // }
});
