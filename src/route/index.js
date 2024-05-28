import { Hono } from "hono";
import { cors } from "hono/cors";
import { ColorConvert } from "../color.js";

const convert = new ColorConvert();

const route = new Hono();

route.get("/rgb-hsl/:value", c => {
	const { value } = c.req.param();
	const result = convert.rgb_hsl(value);

	c.status(result.status);
	return c.json({ result });
});
route.get("/rgb-hex/:value", c => {
	const { value } = c.req.param();
	const result = convert.rgb_hex(value);

	c.status(result.status);
	return c.json({ result });
});
route.get("/hex-rgb/:value", c => {
	const { value } = c.req.param();
	const result = convert.hex_rgb(value);

	c.status(result.status);
	return c.json({ result });
});
route.get("/hex-hsl/:value", c => {
	const { value } = c.req.param();
	const result = convert.hex_hsl(value);

	c.status(result.status);
	return c.json({ result });
});
route.get("/hsl-rgb/:value", c => {
	const { value } = c.req.param();
	const result = convert.hsl_rgb(value);

	c.status(result.status);
	return c.json({ result });
});
route.get("/hsl-hex/:value", c => {
	const { value } = c.req.param();
	const result = convert.hsl_hex(value);

	c.status(result.status);
	return c.json({ result });
});
route.get("/keyword/:value", c => {
	const { value } = c.req.param();
	const result = convert.keyword(value);

	console.log("hello");

	c.status(result.status);
	return c.json({ result });
});

export { route };
