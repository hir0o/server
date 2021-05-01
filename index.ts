import express from "express";
import { restaurants } from "./sample-data";

const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "hello express",
  });
});

app.get("/restaurants", async (req: express.Request, res: express.Response) => {
  const limit: number = Number(req.query.limit) || 5;
  const offset: number = Number(req.query.offset) || 0;
  res.json({
    rows: restaurants.slice(offset, offset + limit),
    count: restaurants.length,
  });
});

app.get(
  "/restaurants/:id",
  async (req: express.Request, res: express.Response) => {
    const id: number = Number(req.params.id);
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    if (!restaurant) {
      res.status(404).json({
        message: "not found",
      });
    }
    res.json(restaurant);
  }
);

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
