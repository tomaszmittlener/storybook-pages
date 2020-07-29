/* eslint-env node */
const autoprefixer = require("autoprefixer"); // eslint-disable-line import/no-extraneous-dependencies
const comments = require("postcss-discard-comments"); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  plugins: [autoprefixer, comments()]
};
