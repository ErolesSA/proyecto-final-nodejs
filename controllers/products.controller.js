import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
} from "../services/products.service.js";

// GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await getProductByIdService(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// POST /api/products/create
export const createProduct = async (req, res) => {
  try {
    const id = await createProductService(req.body);

    res.json({
      message: "Producto creado exitosamente",
      id,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

// DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    await deleteProductService(req.params.id);
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};
