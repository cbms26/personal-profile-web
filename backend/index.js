import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  /*req: request; res: respond */
  res.send("<h1>Hello</h1>");
});
app.get("/about", (req, res) => {
  /*req: request; res: respond */
  res.send("<h1>Hello about</h1>");
});
app.get("/contact", (req, res) => {
  /*req: request; res: respond */
  res.send("<h1>Hello contact</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
