import { getAllProductsService, getProductByIdService, addProductService, deleteProductService, updateProductService } from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
  try {
    console.log("PASO 1");
    const products = await getAllProductsService();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const product = await getProductByIdService(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } else {
      res.status(400).json(error)
    }
  } catch (error) {
    res.status(500);
  }
};

export const addProduct = async (req, res) => {
  try {
    const { category, id, name, price } = req.body;

    if (!category || !id || !name || !price) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios: category, id, name, price.' });
    }

    const newProduct = { category, id, name, price };
    const addedProduct = await addProductService(newProduct);

    res.status(201).json(addedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar el producto', error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, name, price } = req.body;

    if (!id || !category || !name || !price) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios: id, category, name, price.' });
    }

    const updatedProduct = { id, category, name, price };
    await updateProductService(updatedProduct);

    res.status(200).json({ message: 'Producto actualizado correctamente.', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el producto', error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'El ID del producto es obligatorio.' });
    }

    await deleteProductService(id);
    res.status(200).json({ message: 'Producto eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};