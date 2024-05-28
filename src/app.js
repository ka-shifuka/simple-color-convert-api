import { Hono } from "hono";
import { cors } from "hono/cors";
import { route } from "./route/index.js";
const app = new Hono();

app.use("/*", cors({ origin: "*" }));

app.get("/", c => {
	return c.json({
		message: "Hello Welcome to color-convert-api",
		author: "ka-shifuka",
		"for-tutorial": "https://github.com/ka-shifuka/simple-color-convert-api"
	});
});

app.route("/convert", route);

export default app;
