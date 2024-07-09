import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import compression from "compression";
import cors from "cors";
import { database } from "./models/connection";
import api from "./routes";

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cors({ credentials: true, origin: "*" }));

app.get("/", (req, res) => {
  res.send("Hello NOD Readers!");
});

app.use("/api", api);
// Server error handle
app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(500).json({ message: error.message });
});

// Not Found Error handler
app.use((_req: Request, res: Response, _next: NextFunction) => {
  return res.status(404).json({ message: "Resource not found" });
});

database.connect().then(() => {
  app.listen(port, () => {
    return console.log(
      `Express server is listening at http://localhost:${port} 🚀`
    );
  });
});
