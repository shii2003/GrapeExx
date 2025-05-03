export const CREATE_ORDER = "CREATE_ORDER";
export const GET_DEPTH = "GET_DEPTH";
export const GET_OPEN_ORDERS = "GET_OPEN_ORDERS";
export const CANCEL_ORDER = "CANCEL_ORDER";
export const ON_RAMP = "ON_RAMP";
export const BUY = "BUY";
export const SELL = "SELL";

export type CREATE_ORDER_TYPE = {
    type: typeof CREATE_ORDER,
    payload: {
        market: string;
        price: string;
        quantity: string;
        side: typeof BUY | typeof SELL;
        userId: string;
    }
}

export type GET_DEPTH_TYPE = {
    type: typeof GET_DEPTH,
    payload: {
        market: string;
    }
}

export type GET_OPEN_ORDERS_TYPE = {
    type: typeof GET_OPEN_ORDERS,
    payload: {
        userId: string;
        market: string;
    }
}

export type ON_RAMP_TYPE = {
    type: typeof ON_RAMP,
    payload: {
        amount: string;
        userId: string;
        transactionId: string;
    }
}

export type CANCEL_ORDER_TYPE = {
    type: typeof CANCEL_ORDER,
    payload: {
        orderId: string;
        marketId: string;
    }
}


export type FromApiToEngine =
    CREATE_ORDER_TYPE |
    GET_DEPTH_TYPE |
    GET_OPEN_ORDERS_TYPE |
    ON_RAMP_TYPE |
    CANCEL_ORDER_TYPE;
