"use client";

import React, { createContext, useCallback, useMemo, useState } from "react";
import AiAgentServer from "../server/AiAgentServer";

interface AiAgentContextType {
  messages: AiAgentMessage[];
  sendMessage: (message: string) => void;
}

type Sender = "user" | "ai";

interface AiAgentMessage {
  text: string;
  sender: Sender;
}

const WELCOME_MESSAGE: AiAgentMessage = {
  text: "Olá! Como posso ajudá-lo hoje?",
  sender: "ai",
};

const AiAgentContext = createContext<AiAgentContextType | null>(null);
export { AiAgentContext };

export default function AiAgentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const server = AiAgentServer.getInstance();
  const [messages, setMessages] = useState<AiAgentMessage[]>([WELCOME_MESSAGE]);

  const sendMessage = useCallback(async (message: string) => {
    const userMessage: AiAgentMessage = {
      text: message,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      await server
        .sendRequest({ message })
        .then((response) => {
          // const answer = response?.answer || "Desculpe, não consegui entender.";
          // const aiMessage: AiAgentMessage = {
          //   text: answer,
          //   sender: "ai",
          // };
          // setMessages((prevMessages) => [...prevMessages, aiMessage]);
          console.log("Response from server:", response?.body);
        })
        .catch((error) => {
          console.error("Error parsing response:", error);
          return null;
        });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }, []);

  const value = useMemo(
    () => ({
      messages,
      sendMessage,
    }),
    [messages, sendMessage]
  );
  return (
    <AiAgentContext.Provider value={value}>{children}</AiAgentContext.Provider>
  );
}
