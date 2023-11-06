module.exports = node => {
  const spacing = " ".repeat(
    node.maxLength - (node.value ? node.value.length : 0),
  );
  return [node.value, spacing, "|"];
};
