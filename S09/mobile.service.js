import { mobile } from "./mobile.js";

export function create(data) {
  mobile.push(data);
  return true;
}

export function get() {
  return mobile;
}

export function update(id, data) {
  const index = mobile.findIndex(((m) => m.id === id));
  if (index === -1) {
    return false;
  }
  mobile[index] = { ...mobile[index], ...data };
  return mobile[index];
}

export function deleteM(id) {
  const index = mobile.findIndex(((m) => m.id === id));
  if (index === -1) {
    return false;
  }
  mobile.splice(index, 1);
  return true;
}
