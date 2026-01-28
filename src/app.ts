import express from "express";
import issueRoutes from "./routes/issueRoutes";
import { errorHandler } from "./middleware/ErrorMiddleware";

const app = express();

app.use(express.json());
app.use("/api", issueRoutes);
app.use(errorHandler);

export default app;
