const { hardline, join } = require("prettier").doc.builders;

module.exports = (path, print) => {
  return ["    | ", join(" ", path.map(print, "cells")), hardline];
};
