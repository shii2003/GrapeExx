import { createClient, RedisClientType } from "redis";
import { messageToEngine } from "./types/messageToEngine";
import { v4 as uuidv4 } from 'uuid';
import { messageFromEngineToApi } from "./types/messageFromEngineToApi";

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

    public sendToEngineAndAwait(sendMessageToEngine: messageToEngine) {
        return new Promise<messageFromEngineToApi>((resolve, reject) => {
            const id = uuidv4();

            this.subscribeClient.subscribe(id, (message) => {
                try {
                    this.subscribeClient.unsubscribe(id);
                    const parsed = JSON.parse(message);
                    resolve(parsed);
                } catch (err) {
                    this.subscribeClient.unsubscribe(id);
                    reject(new Error("Failed to parse response from engine."));
                }
            });

            this.pushClient.lPush("messages", JSON.stringify({ clientId: id, sendMessageToEngine }))
                .catch((err) => {
                    this.pushClient.unsubscribe(id);
                    reject(new Error("Failed to send message to engine."));
                });
        });
    }

}

