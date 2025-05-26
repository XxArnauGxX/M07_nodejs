export function getRandomNumber(req, res) {
  const max = Number(req.params.number);
  const number = Math.floor(Math.random() * max) + 1;
  res.json({ random: number });
}
