# CAPTAIN AI

A generative-AI chatbot web app built with **Flask**, **MongoDB**, and the **OpenAI API**, with a **Tailwind CSS** chat interface.

## Features

- **Chat UI** built with HTML and Tailwind CSS, with previous conversations loaded from the database on page load.
- **Answer caching:** every question/answer pair is stored in MongoDB. A repeated question is answered from the database instead of calling the OpenAI API again, which saves latency and API cost.
- **OpenAI integration:** new questions are sent to the OpenAI API and the response is saved for future lookups.
- **REST endpoint:** `POST /api` with `{"question": "..."}` returns `{"question": ..., "answer": ...}`.

## Tech stack

| Layer    | Tools                              |
|----------|------------------------------------|
| Backend  | Python, Flask, Flask-PyMongo       |
| AI       | OpenAI API                         |
| Database | MongoDB (Atlas or local)           |
| Frontend | HTML, JavaScript, Tailwind CSS     |

## Getting started

```bash
git clone https://github.com/anandprabhat15/CAPTAIN-AI.git
cd CAPTAIN-AI
pip install flask flask-pymongo openai
npm install            # Tailwind
```

1. Copy `.env.example` and set `OPENAI_API_KEY` and `MONGO_URI` as environment variables (defaults to a local MongoDB). Never commit real credentials.
2. Build the CSS: `npm run tailwind`
3. Start the server: `python main.py`, then open http://localhost:5001

## Known limitations and roadmap

- The code uses the legacy `openai.Completion` / `text-davinci-003` call, which OpenAI has retired. Migrating to the current Chat Completions API is the first planned fix.
- Cache lookup is an exact string match on the question; semantic matching (embeddings) would improve hit rate.
- No conversation-memory across turns yet, since each question is answered independently.
