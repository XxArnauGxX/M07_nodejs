import express from "express";
import routerEx1 from "./ejercicio1/ejercicio1.routes.js";
import routerEx2 from "./ejercicio2/ejercicio2.routes.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/number", routerEx1);
app.use("/array", routerEx2);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
