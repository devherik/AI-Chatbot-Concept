"use client";

import React, { createContext, useMemo } from "react";
import AiAgentServer from "../server/AiAgentServer";

interface AiAgentContextType {
  // Define the shape of your context value here
}

const AiAgentContext = createContext<AiAgentContextType | null>(null);
export { AiAgentContext };

export default function AiAgentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const server = AiAgentServer.getInstance();
  const value = useMemo(() => ({}), []);
  return (
    <AiAgentContext.Provider value={value}>{children}</AiAgentContext.Provider>
  );
}
