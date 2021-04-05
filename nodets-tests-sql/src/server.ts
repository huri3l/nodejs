import express from "express";

const port = 3333;
const app = express();

app.get("/users", (req, res) => {
  return res.send("olar");
});

app.listen(port, () =>
  console.log(`🎉 API is running on http://localhost:${port}`)
);
