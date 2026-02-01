const stopwords = require("./stopwords");

function tokenize(text) {
  return text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean)
    .filter(word => !stopwords.has(word));
}

module.exports = tokenize;
