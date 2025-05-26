export function validateRequest(req, res, next) {
  const { credencial } = req.body;
  if (credencial !== "micredencial") {
    return res.json({ error: "Invalid credentials " });
  }
  next();
}
