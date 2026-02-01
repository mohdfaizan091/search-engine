const { addDocument } = require("../models/documents.store");
const { addToIndex } = require("../models/index.store");
const tokenize = require("../utils/tokenize");

function createDocument(req, res) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json
        ({ 
            error: "title and content required"
        });
  }

  const doc = addDocument({ title, content });

  const tokens = tokenize(`${title} ${content}`);

  for( const word of tokens) {
    addToIndex(word, doc.id);
  }

  res.status(201).json(doc);
}

module.exports = {
  createDocument,
};
