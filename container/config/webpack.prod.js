const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN; //in production domain name=https://ifoodfacts.dev.net

const productionConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", //templete for ouput file like marketingBundle.contenthash.js for caching
    publicPath: "/conatiner/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`, //assuming that https://ifoodfacts.dev.net/marketing exists, similar will be for dashboard and other remotes
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, productionConfig);
