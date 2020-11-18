import express from "express"; // express framework를 사용하기 위해 import함
import dotenv from "dotenv"; // dotenv를 쓰기 위해 import함
import connect from "../db/mongo"; // connect를 사용하기 위해 db폴더 안 mongo에서 import함
import Lecture from "../models/Lecture";

dotenv.config();

const app = express();

connect();

app.set(`PORT`, process.env.PORT);

app.get("/", async (req, res) => {
  const result = await Lecture.find({}, {});
  res.send(result);
});

app.listen(app.get(`PORT`), () => {
  console.log(`Server Start ::`, app.get(`PORT`));
});
