import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js";
import errorHandler from "./src/middlewares/errorHandler.js";

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("*", (req, res) => {res.status(404).json({ success: false, message: "This route is not available." })});
app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server Listening on port http://localhost:${PORT}`)
);
