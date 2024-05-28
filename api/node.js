import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import app from "../src/app.js";

const port = process.env.PORT || 5171;
console.log(`Hono app running on port ${port}`);
serve({
	fetch: app.fetch,
	port
});

app.use(logger());
export default app;
