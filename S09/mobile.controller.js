import { create, deleteM, get, update } from "./mobile.service.js";

export async function addMobile(req, res) {
  const data = req.body;
  const result = await create(data);
  if (!result) {
    return res.json({ error: "Error on creating new mobile" });
  }
  res.status(201).json({ mobile: data });
}

export async function getMobiles(req, res) {
  const data = await get();
  if (!data) {
    return res.json({ error: "Error on getting data" });
  }
  res.json({ data });
}

export async function updateMobile(req, res) {
  const { id, ...data } = req.body;
  const newData = await update(id, data);
  if (!newData) {
    return res.json({ error: "Mobile not found " });
  }
  res.json({ mobile: newData });
}

export async function deleteMobile(req, res) {
  const { id } = req.body;
  const data = await deleteM(id);
  if (!data) {
    return res.json({ error: "Mobile not found" });
  }
  res.json({ Mobile: `Successfully eliminated mobile with ID(${id})` });
}
