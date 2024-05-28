import { serve } from "@hono/node-server";
import app from "../src/app.js";

const port = process.env.PORT || 5171;
console.log(`Hono app running on port ${port}`);
serve({
	fetch: app.fetch,
	port
});

export default app;
