import express from "express";
import { database } from "./models/connection";
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello NOD Readers!");
});

database.connect().then(() => {
  app.listen(port, () => {
    return console.log(
      `Express server is listening at http://localhost:${port} 🚀`
    );
  });
});
