const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const webpackOptions = require("./webpack.config");

      const options = {
        webpackOptions,
        watchOptions: {},
      };

      on("file:preprocessor", webpack(options));

      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx}",
    supportFile: "cypress/support/e2e.js",
  },
});
