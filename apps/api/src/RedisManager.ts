import { createClient, RedisClientType } from "redis";

export class RedisManager {
    private static instace: RedisManager;
    private publishClient: RedisClientType;

    private constructor() {
        this.publishClient = createClient();
    }

    public static getInstance(): RedisManager {
        if (!this.instace) {
            this.instace = new RedisManager();
        }
        return this.instace;
    }
}