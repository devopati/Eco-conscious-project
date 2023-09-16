import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./Db/connectDb.js";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome!");
});

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_DB_URI);

    app.listen(PORT, () => {
      console.log(`Server running on Port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
