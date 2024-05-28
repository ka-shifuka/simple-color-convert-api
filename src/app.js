import { Hono } from "hono";
import { cors } from "hono/cors";
import { route } from "./route/index.js";
const app = new Hono();

app.get("/", c => {
	const userAgent = c.req.header("User-Agent");
	return c.json({ message: "Hello Hono! g", "User-Agent": userAgent });
});

app.route("/", route);
app.use(
	"/*",
	cors({
		origin: "*",
		allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
		maxAge: 600,
		credentials: true
	})
);

export default app;
