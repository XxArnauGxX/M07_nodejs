export function validateNumber(req, res, next) {
  const number = Number(req.params.number);
  if (isNaN(number) || number < 1) {
    return res.json({ error: "Not a valid number" });
  }
  next();
}
