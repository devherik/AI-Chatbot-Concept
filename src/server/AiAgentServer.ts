"use server";

import axios from "axios";

class AiAgentServer {
    static #instance: AiAgentServer;
    static #api: string;

    private constructor() {
        AiAgentServer.#api = import.meta.env.VITE_AI_AGENT_API;
    }

    public static getInstance(): AiAgentServer {
        if (!AiAgentServer.#instance) {
            AiAgentServer.#instance = new AiAgentServer();
        }
        return AiAgentServer.#instance;
    }
    public async sendRequest(data: any): Promise<any> {
        try {
            const response = await axios.post(`${AiAgentServer.#api}/webhook/intranet`, data);
            return response.data;
        } catch (error) {
            console.error("Error sending request:", error);
            throw error;
        }
    }
}
export default AiAgentServer;
