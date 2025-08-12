"use server";

import axios from "axios";

class AiAgentServer {
    static #instance: AiAgentServer;

    private constructor() {}

    public static getInstance(): AiAgentServer {
        if (!this.#instance) {
            this.#instance = new AiAgentServer();
        }
        return this.#instance;
    }
}
export default AiAgentServer;
