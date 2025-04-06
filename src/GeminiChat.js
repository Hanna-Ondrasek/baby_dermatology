import React, { useState } from "react";

const GeminiChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const mockGeminiResponse = (input) => {
    const lower = input.toLowerCase();

    if (lower.includes("eczema")) {
      return "Eczema often appears as red, itchy patches on the cheeks or joints. Keeping the skin moisturized can help reduce flare-ups.";
    } else if (lower.includes("heat rash")) {
      return "Heat rash shows up as tiny red bumps, often in warm areas like the neck, back, or folds of the skin. Keeping the baby cool usually helps.";
    } else if (lower.includes("sepsis")) {
      return "Sepsis in infants can cause fever, lethargy, and blotchy skin. It's a medical emergency — consult a doctor immediately.";
    } else if (lower.includes("meningitis")) {
      return "Meningitis may involve fever, a stiff neck, vomiting, and sensitivity to light. Seek emergency care if suspected.";
    } else {
      return "That's a great question! For any skin concerns in infants, it's always best to consult a pediatrician.";
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Simulate Gemini typing
      await new Promise((res) => setTimeout(res, 1500));

      const reply = mockGeminiResponse(input);
      const botMessage = { role: "gemini", text: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
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
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default GeminiChat;
