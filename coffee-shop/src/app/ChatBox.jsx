"use client";
import { useState } from "react";
import Image from "next/image";

export default function ChatboxAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you with your order?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (userInput.trim() === "") return;

    // Simulate bot response
    setMessages([...messages, { sender: "user", text: userInput }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Got it! Let me check that for you." },
      ]);
    }, 1000);

    setUserInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Chatbox Toggle Button */}
      <button onClick={toggleChat} className="bg-[#77C8C9] p-3 rounded-full shadow-lg hover:bg-[#346E16] transition duration-300">
        <Image src="/bee.png" alt="Chatbot Icon" width={40} height={40} />
      </button>

      {/* Chatbox UI */}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg p-4 mt-2">
          <div className="text-[#05533E] font-bold text-lg mb-2">TAN Café Assistant 🐝</div>

          <div className="h-40 overflow-y-auto border border-gray-200 rounded p-2">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 rounded-lg ${msg.sender === "bot" ? "bg-[#B0BFA0] text-white" : "bg-[#F5F1DF] text-gray-800"}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex mt-2">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={sendMessage} className="bg-[#77C8C9] text-white px-4 py-2 rounded-r hover:bg-[#346E16] transition duration-300">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
