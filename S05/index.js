import express from "express";

const app = express();

const PORT = 3000;

const students = ["Juan", "Marta", "Luis", "Andrea", "Arnau", "Lucía", "Pedro"];

app.get("/", (req, res) => {
  res.json({
    alumnos: students,
    totalAlumnos: students.length,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
