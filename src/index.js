const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async(_, res) => {
  return res.send("Hello, world!");
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));