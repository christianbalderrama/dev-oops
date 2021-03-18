import "regenerator-runtime";
import morgan from "morgan";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.get("/", async(_, res) => {
  return res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));