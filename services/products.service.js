import { db } from "../config/firebase.js";

// Obtener todos los productos
export const getAllProductsService = async () => {
  const snapshot = await db.collection("products").get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Obtener un producto por ID
export const getProductByIdService = async (id) => {
  const doc = await db.collection("products").doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

// Crear un producto
export const createProductService = async (data) => {
  const created = await db.collection("products").add(data);
  return created.id;
};

// Eliminar un producto
export const deleteProductService = async (id) => {
  await db.collection("products").doc(id).delete();
  return true;
};
