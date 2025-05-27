import express from "express";
import router from "./mobile.route.js";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/mobile", router);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
