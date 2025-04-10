import { RedisManager } from "./RedisManager";

async function main() {
    console.log("engine is running");
    const apiQueueKey = "messages";

    const redisManager = RedisManager.getInstance();
    const pullClient = redisManager.getPullFromApiQueueClient();

    while (true) {
        try {
            const message = await pullClient.rPop(apiQueueKey);

            if (!message) {

            } else {
                const parsedMessage = JSON.parse(message);
                console.log(parsedMessage);
            }
        } catch (error) {

        }
    }
}

main();