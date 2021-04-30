import express from "express";

const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "hello express",
  });
});

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
