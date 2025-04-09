import dotenv from "dotenv";
dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import { apiRouter } from "./routes/apiRouter.routes";
import { errorHandler } from "./middleware/errorHandler.middleware";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use("api/v1/", apiRouter)
app.get('/health', (req, res) => {
    res.status(200).json({
        status: "healthy",
    })
})

app.use((
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    errorHandler(err, req, res, next);
})

app.listen(3000, () => {
    console.log(`Sever is listning on port: 3000`)
})