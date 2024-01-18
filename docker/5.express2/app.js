import express from "express";
import morgan from "morgan";
import "dotenv/config";
import path from "path";

const app = express();
const port = process.env.PORT || 8000;
const color = process.env.APP_COLOR;
const __dirname = path.resolve();

app.use(morgan("combined"));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, resp) => {
	resp.render("hello", { color: color });
});

app.listen(port, () => {
	console.log(`Port ${port} ready`);
});