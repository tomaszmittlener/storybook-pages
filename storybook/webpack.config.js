const { THEME } = require("../config");

module.exports = async ({ config }) => {
  const storybookConfig = config;
  storybookConfig.devtool = "inline-source-map";

  storybookConfig.module.rules.push({
    test: /\.scss$/,
    loaders: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            hashPrefix: "ads-ui-kit",
            localIdentName: "[local]__[hash:base64:5]"
          }
        }
      },
      "postcss-loader",
      "sass-loader"
    ]
  });

  storybookConfig.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre"
  });

  return config;
};
