export type CREATE_ORDER = "CREATE_ORDER";
export type GET_DEPTH = "GET_DEPTH";
export type GET_OPEN_ORDERS = "GET_OPEN_ORDERS";
export type CANCEL_ORDER = "CANCEL_ORDER";
export type ON_RAMP = "ON_RAMP";
export type BUY = "BUY";
export type SELL = "SELL";

export type CREATE_ORDER_TYPE = {
    type: CREATE_ORDER,
    payload: {
        market: string;
        price: string;
        quantity: string;
        side: BUY | SELL;
        userId: string;
    }
}

export type GET_DEPTH_TYPE = {
    type: GET_DEPTH,
    payload: {
        market: string;
    }
}

export type GET_OPEN_ORDERS_TYPE = {
    type: GET_OPEN_ORDERS,
    payload: {
        userId: string;
        market: string;
    }
}

export type ON_RAMP_TYPE = {
    type: ON_RAMP,
    payload: {
        amount: string;
        userId: string;
        transactionId: string;
    }
}

export type CANCEL_ORDER_TYPE = {
    type: CANCEL_ORDER,
    payload: {
        orderId: string;
        marketId: string;
    }
}

export type messageToEngine =
    CREATE_ORDER_TYPE |
    GET_DEPTH_TYPE |
    GET_OPEN_ORDERS_TYPE |
    ON_RAMP_TYPE |
    CANCEL_ORDER_TYPE;
