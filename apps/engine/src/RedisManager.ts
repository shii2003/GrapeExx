import { createClient, RedisClientType } from "redis";

export class RedisManager {

    private static instance: RedisManager;
    private pullFromApiQueue: RedisClientType;
    private apiPubSub: RedisClientType;

    private constructor() {
        this.pullFromApiQueue = createClient({
            url: "redis://localhost:6379",
        });
        this.apiPubSub = createClient({
            url: "redis://localhost:6379",
        });

        this.pullFromApiQueue.connect().catch(console.error);
        this.apiPubSub.connect().catch(console.error);

        this.pullFromApiQueue.on("error", (error) => console.error("Pull From Api Queue Error:", error));
        this.apiPubSub.on("error", (error) => console.log("Api Pub Sub Error:", error));
    }

    public static getInstance(): RedisManager {
        if (!this.instance) {
            this.instance = new RedisManager();
        }
        return this.instance;
    }

}