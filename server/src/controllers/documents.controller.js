const { addDocument } = require("../models/documents.store");

function createDocument(req, res) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json
        ({ 
            error: "title and content required"
        });
  }

  const doc = addDocument({ title, content });
  res.status(201).json(doc);
}

module.exports = {
  createDocument,
};
