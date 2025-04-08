import { createClient, RedisClientType } from "redis";

export class RedisManager {

    private static instance: RedisManager;
    private subscribeClient: RedisClientType;
    private publishClient: RedisClientType;

    private constructor() {
        this.publishClient = createClient();
        this.subscribeClient = createClient();
    }

    public static getInstance(): RedisManager {
        if (!this.instance) {
            this.instance = new RedisManager();
        }
        return this.instance;
    }

}