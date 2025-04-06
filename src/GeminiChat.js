import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const GeminiChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(false);

  // Set up the chat once when component mounts
  useEffect(() => {
    const initChat = async () => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const newChat = await model.startChat({
        history: [],
        generationConfig: {
          temperature: 0.7,
        },
      });
      setChat(newChat);
    };

    initChat();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !chat) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const result = await chat.sendMessage(input);
      const reply = result.response.text();
      const botMessage = { role: "gemini", text: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "gemini",
          text: "⚠️ Sorry, something went wrong: " + err.message,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbox">
      <h2 className="chat-header">Need Help Understanding the Results?</h2>
      <p className="chat-subtext">
        Ask our AI assistant anything about skin conditions or what to do next.
      </p>

      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.role}`}>
            <strong>{m.role === "user" ? "You" : "Gemini"}:</strong> {m.text}
          </div>
        ))}
        {loading && <div className="message gemini">Gemini is typing...</div>}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Gemini anything..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default GeminiChat;
