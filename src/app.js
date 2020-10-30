import express from "express";
import dotenv from "dotenv";
import Lecture from "../models/Lecture";

dotenv.config();

const app = express();

app.set(`PORT`, process.env.PORT);

app.get("/grade", async (req, res) => {
  const result = await Lecture.find(
    {
      grade: { $gte: 1 },
    },
    {}
  );
  res.send(result);
});

app.listen(app.get(`PORT`), () => {
  console.log(`Server Start ::`, app.get(`PORT`));
});
