import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const chatRef = useRef(null);

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  useEffect(() => {
    if (!username || !password) {
      setDisabled(true);
      return;
    }
    fetchHistory();
  }, [username, password]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const fetchHistory = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/get_history?username=${encodeURIComponent(username)}`);
      const data = await res.json();
      const formatted = data.map(entry => ({ sender: entry.name === "AI" ? "ai" : "user", text: entry.text }));
      setMessages(formatted);
    } catch (err) {
      console.error("Failed to load history:", err);
    }
  };

  const clearHistory = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/v1/clear_history?username=${encodeURIComponent(username)}`);
      const data = await res.json();
      if (data.status !== false) setMessages([]);
    } catch (err) {
      console.error("Failed to clear history:", err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/v1/send_message?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&message=${encodeURIComponent(input)}`
      );
      const data = await res.json();
      if (data.status) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.response }]);
      } else {
        setMessages((prev) => [...prev, { sender: "ai", text: `❌ ${data.message}` }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "ai", text: `❌ Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Fixed Header */}
      <div className="text-center py-4 text-2xl font-bold bg-gray-950 border-b border-gray-700 shadow-md sticky top-0 z-10">
        Chat with AI
      </div>

      {/* Scrollable Chat */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-6 space-y-4"
        style={{ maxHeight: "calc(100vh - 160px)" }} // accounts for header + input box height
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-xl px-4 py-2 rounded-lg whitespace-pre-wrap ${
              msg.sender === "user" ? "bg-blue-600 self-end ml-auto" : "bg-gray-800 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-400 italic text-sm">AI is typing...</div>}
        {disabled && <div className="text-red-400 italic">Login to begin using AI Chatbot</div>}
      </div>

      {/* Fixed Input */}
      <div className="bg-gray-950 p-4 border-t border-gray-700 flex flex-col md:flex-row gap-2 items-center sticky bottom-0 z-10">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          rows={1}
          placeholder="Type your message..."
          className="flex-1 resize-none bg-gray-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={disabled || loading}
        />
        <div className="flex gap-2 mt-2 md:mt-0">
          <button
            onClick={sendMessage}
            disabled={disabled || loading || !input.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
          >
            Send
          </button>
          <button
            onClick={clearHistory}
            disabled={disabled || loading}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition disabled:opacity-50"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
