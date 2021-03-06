const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js', 
    path: __dirname + '/dist',
  },
  plugins: [new MiniCssExtractPlugin({
    filename: "main.css"
  })],
  module: {
    rules: [
      {
        test: /\.js%/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",
          "postcss-loader", 
          "sass-loader"
        ]
      }
    ],
  },
  watch: true,
}