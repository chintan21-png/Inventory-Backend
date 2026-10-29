import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js"

const app = express();

app.use(express.json());

app.use(cors({origin: process.env.CORS_ORIGIN || "*"}))

app.get("/", (req,res) => {
    res.status(200).json({
        message: "working"
    })
})

app.use("/api/v1/products", productRoutes);




export default app;