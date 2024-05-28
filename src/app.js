import { Hono } from "hono";
import { cors } from "hono/cors";
import { route } from "./route/index.js";
const app = new Hono();

app.use("/*", cors({origin:"*"}));

app.get("/", c => {
	const userAgent = c.req.header("User-Agent");
	return c.json({ message: "Hello Hono! g", "User-Agent": userAgent });
});

app.route("/api", route);

export default app;
