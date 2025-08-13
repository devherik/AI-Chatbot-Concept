"use client";

import React, { createContext, useMemo, useState } from "react";
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
  const value = useMemo(() => ({
    messages,
    sendMessage: (message: string) => {
      const newMessage: AiAgentMessage = {
        text: message,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      server.sendRequest(message);
    },
  }), [messages]);
  return (
    <AiAgentContext.Provider value={value}>{children}</AiAgentContext.Provider>
  );
}
