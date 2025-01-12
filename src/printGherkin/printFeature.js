const {
  fill,
  indent,
  join,
  hardline,
  markAsRoot,
  trim,
} = require("prettier").doc.builders;
const KEYWORD_SEPARATOR = require("./gherkin").KEYWORD_SEPARATOR;
const allowTextToBeSplited = require("./helper/allowTextToBeSplited");
const isNodeOnTopOfFile = require("./helper/isNodeOnTopOfFile");

// eslint-disable-next-line no-unused-vars
module.exports = (node, options) => {
  return markAsRoot(
    [
      isNodeOnTopOfFile(node) ? "" : hardline,

      // Feature tags
      join(
        " ",
        node.tags.length > 0
          ? [...node.tags.map(oneTag => oneTag.name.trim()), hardline]
          : [],
      ),

      // Feature body
      indent(
        [
          // Feature title
          [node.keyword, KEYWORD_SEPARATOR, node.name],

          // Feature description
          node.description
            ? [
                hardline,
                fill([...allowTextToBeSplited(node.description), trim]),
              ]
            : "",
        ],
      ),
      hardline,
    ],
  );
};
