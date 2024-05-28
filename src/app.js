import { Hono } from "hono";
import { ColorConvert } from "./color.js";
const app = new Hono();

app.get("/", c => {
  const userAgent = c.req.header("User-Agent");
  return c.json({ message: "Hello Hono! g", "User-Agent": userAgent });
});

app.get("/rgb-hsl/:value", c => {
  const { value } = c.req.param();
  const convert = new ColorConvert();

  const result = convert.rgb_hsl(value);

  c.status(result.status);
  return c.json({ result });
});

app.get("/rgb-hex/:value", c => {
  const { value } = c.req.param();
  const convert = new ColorConvert();

  const result = convert.rgb_hex(value);

  c.status(result.status);
  return c.json({ result });
});

export default app;
