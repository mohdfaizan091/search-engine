const invertedIndex = new Map();

function addToIndex(word, docId) {
  if (!invertedIndex.has(word)) {
    invertedIndex.set(word, new Set());
  }
  invertedIndex.get(word).add(docId);
}

function getIndex() {
  return invertedIndex;
}

module.exports = {
  addToIndex,
  getIndex,
};
