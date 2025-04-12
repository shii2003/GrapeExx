import { BASE_CURRENCY } from "./Engine";

export interface Fill {
    price: number;
    quantity: number;
    tradeId: number;
    otherUserId: string;
    markerOrderId: string;
}

export interface Order {
    price: number;
    quantity: number;//number and string choose one
    orderId: string;
    filled: number;
    side: "BUY" | "SELL";
    userId: string;
}

export class Orderbook {
    asks: Order[];
    bids: Order[];
    quoteAsset: string = BASE_CURRENCY;
    baseAsset: string;
    lastTradeId: number;
    currentPrice: number;

    constructor(baseAsset: string, asks: Order[], bids: Order[], lastTradeId: number, currentPrice: number) {
        this.asks = asks;
        this.bids = bids;
        this.baseAsset = baseAsset;
        this.lastTradeId = lastTradeId;
        this.currentPrice = currentPrice;
    }

    public ticker() {
        return `${this.baseAsset}_${this.quoteAsset}`
    }

    public getSnapShot() {
        return {
            asks: this.asks,
            bids: this.bids,
            baseAsset: this.baseAsset,
            lastTradeId: this.lastTradeId,
            currentPrice: this.currentPrice,
        }
    }

    public addOrder() {

    }

    //if you want to buy
    matchBid(order: Order): { fills: Fill[], executedQuantity: number } {
        const fills: Fill[] = [];
        let executedQuantity = 0;

        for (let i = 0; i < this.asks.length; i++) {
            if (this.asks[i].price <= order.price && executedQuantity < order.quantity) {
                const filledQuantity = Math.min(order.quantity - executedQuantity, this.asks[i].quantity);
                executedQuantity += filledQuantity;
                this.asks[i].filled += filledQuantity;

                fills.push({
                    price: this.asks[i].price,
                    quantity: filledQuantity,
                    tradeId: this.lastTradeId++,
                    otherUserId: this.asks[i].userId,
                    markerOrderId: this.asks[i].orderId,
                })
            }
        }

        for (let i = 0; i < this.asks.length; i++) {
            if (this.asks[i].filled === this.asks[i].quantity) {
                this.asks.splice(i, 1);
                i--;
            }
        }
        return {
            fills,
            executedQuantity
        }
    }

    //if you want to sell
    matchAsk(order: Order): { fills: Fill[], executedQuantity: number } {
        const fills: Fill[] = [];
        let executedQuantity = 0;

        for (let i = 0; i < this.bids.length; i++) {
            if (this.bids[i].price >= order.price && executedQuantity < order.quantity) {
                const filledQuantity = Math.min(order.quantity - executedQuantity, this.bids[i].quantity);
                executedQuantity += filledQuantity;
                this.bids[i].quantity += filledQuantity;
                fills.push({
                    price: this.bids[i].price,
                    quantity: filledQuantity,
                    tradeId: this.lastTradeId++,
                    otherUserId: this.bids[i].userId,
                    markerOrderId: this.bids[i].orderId,
                })
            }
        }
        for (let i = 0; i < this.bids.length; i++) {
            if (this.bids[i].quantity === this.bids[i].filled) {
                this.bids.splice(i, 1);
                i--;
            }
        }
        return {
            fills,
            executedQuantity
        }
    }


}