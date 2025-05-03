import { CANCEL_ORDER, CREATE_ORDER, CREATE_ORDER_TYPE, FromApiToEngine, GET_DEPTH, GET_OPEN_ORDERS, ON_RAMP } from "../types/FromApiToEngine";
import { Fill, Order, Orderbook } from "./Orderbook";

export const BASE_CURRENCY = "INR";

interface UserBalance {
    [key: string]: {
        availableBalance: number,
        lockedBalance: number,
    }
}

export class Engine {
    private orderbooks: Orderbook[] = [];
    private balances: Map<string, UserBalance> = new Map();
    private lastOrderId = 0;

    constructor() {

    }

    process(
        { messageFromApi, clientId }: { messageFromApi: FromApiToEngine, clientId: string }
    ) {
        switch (messageFromApi.type) {
            case CREATE_ORDER:
                break;
            case CANCEL_ORDER:
                break;
            case ON_RAMP:
                break;
            case GET_DEPTH:
                break;
            case GET_OPEN_ORDERS:
                break;
            default:

        }
    }

    createOrder(createOrderPayload: CREATE_ORDER_TYPE["payload"]) {
        const targetOrderbook = this.orderbooks.find((ordebook) => ordebook.ticker() === createOrderPayload.market);

        if (!targetOrderbook) {
            throw new Error("the orderbook does not exist");
        }
        //check users funds
        const [baseAsset, quoteAsset] = createOrderPayload.market.split("_");

        this.checkAndLockFunds(
            baseAsset,
            quoteAsset,
            createOrderPayload.side,
            createOrderPayload.userId,
            createOrderPayload.price,
            createOrderPayload.quantity
        );

        const order: Order = {
            price: Number(createOrderPayload.price),
            quantity: Number(createOrderPayload.price),
            orderId: (this.lastOrderId++).toString(),
            filled: 0,
            side: createOrderPayload.side,
            userId: createOrderPayload.userId
        }
    }

    checkAndLockFunds(
        baseAsset: string,
        quoteAsset: string,
        side: "SELL" | "BUY",
        userId: string,
        price: string,
        quantity: string) {

        const userBalances = this.balances.get(userId);

        if (!userBalances) {
            throw new Error("User balances does not exist");
        }
        const requiredAmount = Number(price) * Number(quantity);

        if (side === "BUY") {
            const quoteBalance = userBalances[quoteAsset];

            if (!quoteBalance) {
                throw new Error(`Quote asset balance ${quoteAsset} not found`);
            }
            if ((quoteBalance.availableBalance || 0) < requiredAmount) {
                throw new Error("Insufficient funds");
            }
            quoteBalance.availableBalance -= requiredAmount;
            quoteBalance.lockedBalance += requiredAmount;
        } else if (side === "SELL") {
            const baseBalance = userBalances[baseAsset];
            if (!baseBalance) {
                throw new Error(`base asset balance ${baseAsset} not found`);
            }
            if ((baseBalance.availableBalance || 0) < Number(quantity)) {
                throw new Error("Insufficient funds")
            }
            baseBalance.availableBalance -= Number(quantity);
            baseBalance.lockedBalance += Number(quantity);
        }
    }

    updateBalances(
        userId: string,
        baseAsset: string,
        quoteAsset: string,
        side: "SELL" | "BUY",
        fills: Fill[],
        executedQuantity: number
    ) {

        if (side === "BUY") {

        }
        else if (side === "SELL") {

        }
    }
}