export type CREATE_ORDER = "CREATE_ORDER";
export type GET_DEPTH = "GET_DEPTH";
export type GET_OPEN_ORDERS = "GET_OPEN_ORDERS";
export type CANCEL_ORDER = "CANCEL_ORDER";
export type ON_RAMP = "ON_RAMP";
export type BUY = "BUY";
export type SELL = "SELL";

export type messageToEngine = {
    type: CREATE_ORDER,
    payload: {
        market: string;
        price: string;
        quantity: string;
        side: BUY | SELL;
        userId: string;
    }
} | {
    type: GET_DEPTH,
    payload: {
        market: string;
    }
} | {
    type: GET_OPEN_ORDERS,
    payload: {
        userId: string;
        market: string;
    }
} | {
    type: ON_RAMP,
    payload: {
        amount: string;
        userId: string;
        transactionId: string;
    }
} | {
    type: CANCEL_ORDER,
    payload: {
        orderId: string;
        marketId: string;
    }
}