import express from "express";
import {
  getActualDateFormatted,
  getActualDateInMiliseconds,
  getActualTimeFormatted,
} from "./ejercicio1.js";
import { getMultiplicationTable } from "./ejercicio2.js";
import { getFactorial } from "./ejercicio3.js";
import { getResult } from "./ejercicio4.js";

const app = express();

const PORT = 3000;

app.use(express.json());

// Ejercicio 1
app.get("/time/ms", async (req, res) => {
  const data = await getActualDateInMiliseconds();
  res.json({ timeInMiliseconds: data });
});
app.get("/time/date", async (req, res) => {
  const data = await getActualDateFormatted();
  res.json({ date: data });
});
app.get("/time/time", async (req, res) => {
  const data = await getActualTimeFormatted();
  res.json({ time: data });
});

// Ejercicio 2
app.get("/table/:num", async (req, res) => {
  const num = Number(req.params.num);
  if (num === null || num < 2 || num > 5) {
    return res.json({ error: "Number not valid" });
  }
  const data = await getMultiplicationTable(num);
  res.json({ table: data });
});

// Ejercicio 3
app.get("/factorial/:num", async (req, res) => {
  const num = Number(req.params.num);
  if (isNaN(num)) {
    return res.json({ error: "Number not valid " });
  }
  const data = await getFactorial(num);
  res.json({ factorial: data });
});

//Ejercicio 4
app.post("/operation", async (req, res) => {
  const operation = req.query.operation.toLowerCase().trim();
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.json({ error: "num1 or num2 is not a number" });
  }
  const data = await getResult(operation, num1, num2);
  res.json({ operation: data });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
