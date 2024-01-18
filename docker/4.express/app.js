import express from "express";
import morgan from "morgan";

const app = express();
const port = 8000;

app.use(morgan("dev"));

app.get("/", (req, resp) => {
  resp.json({ "message": "home" });
})

app.listen(port, () => {
  console.log(`Port ${port} ready`);
})