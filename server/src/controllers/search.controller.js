const { getIndex } = require("../models/index.store");
const { getAllDocuments } = require("../models/documents.store");
const tokenize = require("../utils/tokenize");

function search(req, res) {
  const query = req.query.q;

  if (!query || !query.trim()) {
    return res.status(400).json({ error: "query required" });
  }

  const tokens = tokenize(query);
  const index = getIndex();

  const scores = new Map();

  for (const word of tokens) {
    const docIds = index.get(word);
    if (!docIds) continue;

    for (const docId of docIds) {
      scores.set(docId, (scores.get(docId) || 0) + 1);
    }
  }

  const documents = getAllDocuments();

  const results = documents
    .filter((doc) => scores.has(doc.id))
    .map((doc) => ({
      id: doc.id,
      title: doc.title,
      score: scores.get(doc.id),
    }))
    .sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
        return a.title.localeCompare(b.title);
    });


  res.json({
    query,
    results,
  });
}

module.exports = { search };
