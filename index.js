import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  return res.send("HII welcome to the Api");
});

// routes files
import routes from "./features/routes/routes.js";
app.use(routes);

app.listen(PORT, () => {
  console.log(`server is Started at port ${PORT}`);
});
