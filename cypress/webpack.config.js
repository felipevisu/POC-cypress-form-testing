const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: "commonjs", // This is the key change
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@fixtures": path.resolve(__dirname, "cypress/fixtures"),
      "@support": path.resolve(__dirname, "cypress/support"),
      "@e2e": path.resolve(__dirname, "cypress/e2e"),
      "@commands": path.resolve(__dirname, "cypress/support/commands"),
      "@pages": path.resolve(__dirname, "cypress/support/pages"),
      "@utils": path.resolve(__dirname, "cypress/support/utils"),
    },
  },
};
