import { useContext } from "react";
import { AiAgentContext } from "../providers/AiAgentProvider";

export const useAiAgent = () => {
  const context = useContext(AiAgentContext);
  if (!context) {
    throw new Error("useAiAgent must be used within an AiAgentProvider");
  }
  return context;
};