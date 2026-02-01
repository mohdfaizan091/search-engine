const documents = new Map();
let idCounter = 1;

function addDocument({ title, content}) {

    for (const doc of documents.values()) {
        if (doc.title === title && doc.content === content) {
            return null; // duplicate
        }
    }
    const id = String(idCounter++);
    const doc = { id, title, content };
    documents.set(id, doc);
    return doc
}

function getAllDocuments(){
    return Array.from(documents.values());
}

module.exports = {
  addDocument,
  getAllDocuments,
};