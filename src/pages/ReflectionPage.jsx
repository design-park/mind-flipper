import { useState, useRef, useEffect } from "react";
import rabbitImg from "../assets/rabbit.png";
export default function ReflectionPage() {
  const [messages, setMessages] = useState([
    {
      sender: "rabbit",
      text: "Hi, I want to know more about what you wrote to flip it better. Can you tell me more about what happened?",
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "rabbit", text: "Hmm, I see. Tell me more!" },
      ]);
    }, 800);
  };

  return (
    <div className="reflectionPage">
      <div className="reflectionContainer">
        {/* Header */}
        <div className="header">
          <img src={rabbitImg} alt="Rabbit" className="rabbit" />
          <h2>Rabbit hops in to know more!</h2>
        </div>

        {/* Chat */}
        <div className="chatArea">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chatBubble ${
                msg.sender === "rabbit" ? "rabbitBubble" : "userBubble"
              }`}
            >
              {msg.text}
            </div>
          ))}

          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="inputArea">
          <textarea
            rows={1}
            placeholder="Type your reply... "
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <button onClick={handleSend} className="sendButton">
            ✨
          </button>
        </div>
      </div>
    </div>
  );
}
