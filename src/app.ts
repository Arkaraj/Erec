import express from "express";

const app = express();

app.use(express.json());
const port = process.env.PORT || 3005;

app.get("/", async (_req, res) => {
  return res.status(200).json({
    message: "Success",
    success: true,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
