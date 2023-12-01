import React, { useState } from "react";
import openai from "openai";

openai.api_key = "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";

const ChatInterface = () => {
  const [chatLog, setChatLog] = useState([
    { role: "system", content: "You are a bot to give advice and solutions" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [assistantReply, setAssistantReply] = useState("");

  const handleUserInput = async () => {
    setChatLog([...chatLog, { role: "user", content: userInput }]);
    const response = await openai.ChatCompletion.create({
      model: "gpt-3.5-turbo",
      messages: chatLog,
    });
    const chatGPTReply = response.choices[0].message.content;
    setChatLog([...chatLog, { role: "assistant", content: chatGPTReply }]);
    setAssistantReply(chatGPTReply);
  };

  return (
    <div>
      <div>
        {chatLog.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleUserInput}>Send</button>
      <div>{assistantReply}</div>
    </div>
  );
};

export default ChatInterface;
