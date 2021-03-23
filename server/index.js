import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db";
import movieRouter from "./router/router";

dotenv.config();

const app = express();
const APIPORT = process.env.APIPORT;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.json());

db.on("error", () => console.log(`database error : ${error} 💔`));
db.once("open", () => console.log(" Database open 💘"));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api", movieRouter);

app.listen(APIPORT, () => {
  console.log(`Server is running on ⭕ http://localhost:${APIPORT}`);
});
