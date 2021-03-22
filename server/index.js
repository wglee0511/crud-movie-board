import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const APIPORT = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(APIPORT, () => {
  console.log(`⭕ http://localhost:${APIPORT}`);
});
