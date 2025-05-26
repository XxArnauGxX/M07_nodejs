export function changeArray(req, res) {
  const array = [2, 4, 8, 9, 7, 3, 5, 6];
  const { numero } = req.body;
  const newArray = array.map((num) => num * numero);
  return res.json({ newArray: newArray });
}
