import "regenerator-runtime";

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async(_, res) => {
  return res.send("Hello, world! dd");
});

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));