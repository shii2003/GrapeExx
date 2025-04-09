import express, { Router } from "express";

export const apiRouter = Router();

apiRouter.get("/depth", (req, res) => {
    res.send("depth");
});
apiRouter.get("/kline", (req, res) => {
    res.send("kline");
});
apiRouter.get("/trade", (req, res) => {
    res.send("trade");
});
apiRouter.post("/order", (req, res) => {
    res.send("order");
});
apiRouter.delete("/order", (req, res) => {
    res.send("order");
});
apiRouter.get("/order/open", (req, res) => {
    res.send("order open");
});
apiRouter.get("/ticker", (req, res) => {
    res.send("ticker");
});