import { z } from "zod";

export const createOrderSchema = z.object({
    market: z.string(),
    price: z.string(),
    quantity: z.string(),//or number?
    side: z.enum(["BUY", "SELL"]),
    userId: z.string(),
})