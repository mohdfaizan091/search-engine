const documents = new Map();
let idCounter = 1;

function addDocument({ title, content}) {
    const id = String(idCounter++);
    const doc = { id, title, content };
    documents.set(id, doc);
    return doc
}

function getAllDocuments(){
    return Array.from(documents.Value());
}

module.exports = {
  addDocument,
  getAllDocuments,
};