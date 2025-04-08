# 🤖 AI Chatbot Web App

An intelligent, full-stack chatbot web application that enables real-time conversation with an AI model. Built with **React.js** on the frontend and **FastAPI (Python)** on the backend, it stores chat history in a local **SQLite** database and supports features like login-based access, auto-fetching history, and chat clearing.

---

## 🛠️ Technologies Used

### Frontend:
- **React.js** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **JavaScript (ES6)** – Event handling, fetch APIs
- **LocalStorage** – Browser-side session persistence

### Backend:
- **FastAPI** – High-performance async web framework
- **Python** – Core logic, API routing
- **SQLite** – Lightweight database for storing chats

### Other:
- **RESTful APIs** – Communication between frontend and backend
- **AI Integration** – Handles AI chat responses (expandable to OpenAI, etc.)

---

## ⚙️ Project Structure

```
project-root
├── frontend/             # React frontend
│   └── src/
│       ├── Chat.jsx
│       ├── About.jsx
│       └── ...
├── backend/              # FastAPI backend
│   ├── main.py
│   ├── api/
│   │   ├── v1/
│   │   │   └── routes.py
│   ├── handler.py
│   └── database/
│       └── messages.py
└── README.md
```

---

## 🚀 Getting Started

### 📦 Backend Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/ai-chatbot-app.git
cd ai-chatbot-app/backend
```

2. **Create a virtual environment** (optional but recommended)
```bash
python -m venv env
source env/bin/activate  # Windows: env\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Run FastAPI server**
```bash
uvicorn main:app --reload
```

The backend runs at: `http://127.0.0.1:8000`

---

### 🌐 Frontend Setup

1. **Navigate to frontend directory**
```bash
cd ../frontend
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The frontend runs at: `http://localhost:5173`

---

## 🔐 Features

- 🧠 Smart AI chatbot interface
- 💾 Auto-fetch conversation history (per user)
- 🔐 Username/password authentication via localStorage
- ❌ Clear chat history with one click
- 🎨 Dark-themed, responsive design
- 🚀 Fast, optimized, and interactive

---

## 🧪 Example Users
You can simulate user login by storing credentials manually:
```js
localStorage.setItem("username", "testuser");
localStorage.setItem("password", "1234");
```

---

## 💡 Future Improvements
- OpenAI GPT-4 / Gemini integration
- JWT authentication
- Persistent user login with session tokens
- Export chat transcripts

---

## 📄 License
MIT License. Feel free to use, modify, and build upon this project!

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📬 Contact
Created by [Meeth Waghela](https://github.com/Meeth-W) – feel free to reach out with feedback or contributions!

