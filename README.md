# GitHub Issue Analyzer with Local Caching + LLM Processing

## Overview
This project is a backend service that provides two API endpoints to:

1. Fetch and locally cache open GitHub issues from a repository.
2. Analyze the cached issues using a natural-language prompt and a Large Language Model (LLM).

The service is built using **Node.js, Express, and TypeScript**, uses **JSON file storage** for local caching, and integrates with an LLM (OpenAI) for analysis.

No frontend UI is included — this is strictly a backend service.

---

## Features
- Fetch open GitHub issues via GitHub REST API
- Cache issues locally using JSON file storage
- Analyze cached issues using an LLM
- Request validation using Zod
- Centralized error handling middleware
- Clean service-layer architecture

---

## Tech Stack
- Node.js
- Express
- TypeScript
- Zod
- OpenAI API
- JSON file storage

---

## Storage Choice
**Chosen storage option:** JSON file storage  

**Reason:**  
JSON file storage is simple, persistent across server restarts, easy to inspect, and well-suited for the scale of this assignment. It avoids the complexity of setting up a database while still providing durable local caching.

---

## Setup & Installation

### 1. Clone the repository
<!-- ```bash -->
git clone <your-repository-url>
cd github-issue-analyzer

### 2. Install dependencies
npm install

### 3. Create a .env file

### 4. Run the server
npm run dev

### Server will start at:
http://localhost:3000
