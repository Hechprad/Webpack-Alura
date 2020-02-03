const path = require("path");
const babiliPlugin = require("babili-webpack-plugin");

let plugins = [];

process.env.NODE_ENV == "production" && plugins.push(new babiliPlugin());

module.exports = {
  entry: "./app-src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/, //search for all .js files
        exclude: /node_modules/, //doesn't look for js files in node_modules folder
        use: {
          loader: "babel-loader" //run babel loader on js files
        }
      }
    ]
  },
  plugins
};
