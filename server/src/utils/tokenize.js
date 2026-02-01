function tokenize(text) {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean);
}

module.exports = tokenize;
