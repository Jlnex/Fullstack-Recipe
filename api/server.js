import express from "express";
import recipeRoutes from "./routes/index.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use(recipeRoutes);

app.listen(port, () => {
  console.log(`🚨 Server ${port} portunu dinlemeye başladı 🚨`);
});
