import express from "express";
const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "hello ts",
  });
});

app.listen(3000);
