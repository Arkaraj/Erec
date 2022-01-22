import express from "express";
import { sendNewEmail } from "./queues/email.queue";
import {} from "bull";

const app = express();

app.use(express.json());
const port = process.env.PORT || 3005;

app.get("/", async (_req, res) => {
  return res.status(200).json({
    message: "Success",
    success: true,
  });
});

app.post("/send-email", async (req, res) => {
  const { message, ...restBody } = req.body;
  try {
    await sendNewEmail({
      ...restBody,
      html: `<p>${message}</p>`,
    });
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
