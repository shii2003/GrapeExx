import { NextFunction, Request, Response } from "express";
import { createOrderSchema } from "../utils/zodValidation";
import { RedisManager } from "../RedisManager";

export const createOrderHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const parsedData = createOrderSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(400)
                .json({
                    error: "Invalid payload for create Order",
                    details: parsedData.error.errors,
                })
        }
        const { market, price, quantity, side, userId } = parsedData.data;

        const response = await RedisManager.getInstance().sendToEngineAndAwait({
            type: "CREATE_ORDER",
            payload: {
                market,
                price,
                quantity,
                side,
                userId,
            }
        })

        if (!response) {
            return res
                .send(500)
                .json({ error: response?.error || "Unknown error from engine" })
        }
    }
    catch (error) {
        next(error);
    }
}