
import express from "express";
import { AppDataSource } from "./data-source";
import livroRoutes from "./routes/livroRoutes";

const app = express();
app.use(express.json());
app.use(livroRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("DB conectado");
    app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
  })
  .catch((err) => console.error(err));
