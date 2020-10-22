import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set(`PORT`, process.env.PORT);

app.get("/", async (req, res) => {});

app.listen(app.get(`PORT`), () => {
  console.log(`Server Start ::`, app.get(`PORT`));
});
