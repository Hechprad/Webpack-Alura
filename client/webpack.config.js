const path = require("path");
const babiliPlugin = require("babili-webpack-plugin");

let plugins = [];

process.env.NODE_ENV == "production" && plugins.push(new babiliPlugin());

module.exports = {
  entry: "./app-src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/, //search for all .js files
        exclude: /node_modules/, //doesn't look for js files in node_modules folder
        use: {
          loader: "babel-loader" //run babel loader on js files
        }
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins
};
