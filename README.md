# 🔍 Mini Search Engine (In-Memory Core)

Built a mini search engine backend using an **inverted index** and **write-time indexing** to support fast keyword search with deterministic ranking.

This project focuses on **correctness, clarity, and algorithmic thinking**, not UI or production-scale tooling.

---

##  What This Project Does

Given a text query, the system returns the **most relevant documents in ranked order**.

Core responsibilities:
- Store documents
- Build an inverted index at write time
- Execute fast keyword search
- Rank results deterministically

---

##  What This Project Does NOT Do

Intentionally:
- Fuzzy search / typo correction
- Autocomplete
- Pagination
- Databases or persistence
- Distributed systems
- UI

Restraint is deliberate.  
The goal is to understand **search fundamentals**, not build Elasticsearch.

---

##  Core Concepts

### 1. Inverted Index

Instead of scanning every document during search, the system builds an index:

Documents:
doc1: "frontend engineer"
doc2: "backend engineer"

Inverted Index:
frontend → [doc1]
backend → [doc2]
engineer → [doc1, doc2]


This allows search to touch **only relevant documents**, making queries fast.

---

### 2. Write-Time Indexing

Documents are indexed **when they are added**, not during search.

Why this matters:
- Indexing cost is paid once
- Search becomes cheap and predictable
- This mirrors real-world search engines

---

### 3. Tokenization & Normalization

Both documents and queries use the **same tokenization logic**:
- lowercase text
- split on non-alphabet characters
- remove stop-words

This guarantees consistency between indexing and querying.

---

### 4. Ranking Strategy

Results are ranked using **term frequency**:
- Each matched query term adds +1 score to a document
- Higher score = higher relevance

---


## 📡 API Endpoints

- GET /health

Response:
```json
{ "status": "ok" }

- POST /documents

{
  "title": "Frontend Engineer",
  "content": "React components and UI logic"
}

- GET /search?q=frontend engineer

{
  "query": "frontend engineer",
  "results": [
    {
      "id": "2",
      "title": "Frontend Engineer",
      "score": 2
    },
    {
      "id": "1",
      "title": "Backend Engineer",
      "score": 1
    }
  ]
}

- ARCHITECTURE

Client
  ↓
Search API
  ↓
Tokenize Query
  ↓
Inverted Index Lookup
  ↓
Score + Rank
  ↓
Results

How to Run Locally:

cd backend
npm install
npm run dev

http://localhost:3000

🧩 Design Decisions (Why Things Are This Way)

In-memory storage → focus on algorithms, not databases

No persistence → removes noise during learning

No fuzzy search → keeps ranking logic explainable

Stop-word filtering → improves signal quality

No premature optimization → clarity first

Note:-

This project is intentionally frozen.
It serves as a reference implementation of a search engine core, not a feature playground.
