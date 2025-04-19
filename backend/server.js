const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.post("/frame", (req, res) => {
  const base64 = req.body.image;
  // Decode or forward to detection model here
  console.log("Frame received");
  res.sendStatus(200);
});

app.listen(3000, () => console.log("Listening on port 3000"));
