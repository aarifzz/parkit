import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  // Fetch your API_KEY securely (replace with your actual API key)
  const API_KEY = "AIzaSyB7uzOh4aYaYYlpXIVagcgmw2hg2R2Yu8E"; // Replace with your API key
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: "tunedModels/parkitchatbot-ut5ym83vaiv2",
  });

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    
    setChatLog((prevLog) => [...prevLog, { type: "user", message: userInput }]);

    // Fetch bot response
    const response = await model.generateContent(userInput);
    const botReply = response.response.text();
    setUserInput("");

   
    setChatLog((prevLog) => [...prevLog, { type: "bot", message: botReply }]);

    
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="h-96 overflow-y-auto border-b border-gray-300 mb-4 p-3">
          {chatLog.map((chat, index) => (
            <div key={index} className={`mb-2  ${chat.type === "user" ? "text-right" : "text-left"}`}>
              <p
                className={`  p-2 rounded-lg text-black ${
                  chat.type === "bot" ? " " : " "
                }`}
              >
               <span className="text-lg font-bold">{chat.type === "bot"?"bot:":"User:"}</span> {chat.message} 
              </p>
            </div>
          ))}
        </div>

        <div className="flex p-4">
          <input
            type="text"
            className="w-full mr-4 bg-slate-500 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
        
          <button onClick={handleSendMessage} className="bg-[#F9C935] text-black text-md px-14 py-4 rounded-lg font-semibold mr-4">send</button>

        </div>
      </div>
    </div>
  );
};

export default Chatbot;
