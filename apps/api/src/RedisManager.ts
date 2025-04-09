import { createClient, RedisClientType } from "redis";

export class RedisManager {
    private static instace: RedisManager;
    private pushClient: RedisClientType;
    private subscribeClient: RedisClientType;

    private constructor() {
        this.pushClient = createClient({
            url: "redis://localhost:6379",
        });
        this.subscribeClient = createClient({
            url: "redis://localhost:6379",
        })

        this.pushClient.connect().catch(console.error);
        this.subscribeClient.connect().catch(console.error);

        this.pushClient.on("error", (error) => console.error('Push Client Error: ', error));
        this.subscribeClient.on("error", (error) => console.error("Subscribe Client Error", error));

    }

    public static getInstance(): RedisManager {
        if (!this.instace) {
            this.instace = new RedisManager();
        }
        return this.instace;
    }

}