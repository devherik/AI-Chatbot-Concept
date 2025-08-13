"use server";

import axios from "axios";

class AiAgentServer {
  static #instance: AiAgentServer;
  static #api: string;

  private constructor() {
    AiAgentServer.#api = "/api";
  }

  public static getInstance(): AiAgentServer {
    if (!AiAgentServer.#instance) {
      AiAgentServer.#instance = new AiAgentServer();
    }
    return AiAgentServer.#instance;
  }
  public async sendRequest(data: {
    message: string;
  }): Promise<Response | null> {
    try {
      const response = await axios.post(
        `${AiAgentServer.#api}/webhook/intranet`,
        data
      );
      console.info("Response from AI agent:", response.data);
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error sending request:", error);
      throw error;
    }
  }
}
export default AiAgentServer;
