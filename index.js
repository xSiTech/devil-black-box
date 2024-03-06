import express from "express";
import "dotenv/config";

const app = express();



const PORT = process.env.PORT || 4000;


app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.get("/", (req,res) => {
    return res.send("HII welcome to the Api")
});

// routes files
import routes from "./routes/index.js";
app.use(routes)

app.listen(PORT, () => {
    console.log(`server is Started at port ${PORT}`);
})