const { hardline, trim } = require("prettier").doc.builders;

// eslint-disable-next-line no-unused-vars
module.exports = (node, options) => {
  return [
    ["    ", node.keyword, trim, " ", node.text],
    hardline,
  ];
};
