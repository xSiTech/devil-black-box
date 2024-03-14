import express from "express";
import "dotenv";
import routes from "./features/routes/routes.js";
import fileUpload from "express-fileupload";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(express.urlencoded({ extended: false}));
app.use(routes);

app.use(fileUpload({
    useTempFiles: true,
}));

app.listen(PORT, () => {
    console.log(`server is Started at port ${PORT}`);
});