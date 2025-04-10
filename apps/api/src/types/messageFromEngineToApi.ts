import { BUY, SELL } from "./messageToEngine";

export type ORDER_PLACED = "ORDER_PLACED";
export type DEPTH = "DEPTH";
export type OPEN_ORDERS = "OPEN_ORDERS";
export type ORDER_CANCELLED = "ORDER_CANCELLED";

export type ORDER = {
    price: number;
    quantity: number;
    orderId: string;
    filled: number;
    side: BUY | SELL;
}


export type messageFromEngineToApi = {
    type: ORDER_PLACED,
    payload: {
        orderId: string;
        executedQuantity: number;
        fills: [
            {
                price: string;
                quantity: number;
                tradeId: number;
            }
        ]
    }
} | {
    type: DEPTH,
    payload: {
        market: string;
        asks: [string, string][];
        bids: [string, string][];
    }
} | {
    type: OPEN_ORDERS,
    payload: ORDER[],
} | {
    type: ORDER_CANCELLED,
    payload: {
        orderId: string;
        executedQuantity: number;
        remainingQuantity: number;
    }
}