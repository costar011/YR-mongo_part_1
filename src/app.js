import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connect();
app.set(`PORT`, process.env.PORT);

app.get("/", async (req, res) => {
  const result = await Student.find({}, {});
  res.send(result);
});

app.listen(app.get(`PORT`), () => {
  console.log(`Server Start ::`, app.get(`PORT`));
});
