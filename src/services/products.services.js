import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto } from "../models/products.model.js"; 

export const getAllProductsService = async () => {
  return (
    new  Promise(async (res, rej) => {
      try {
        const productos = await obtenerProductos();
        res(productos);
      } catch (error) {
        rej();
      }
    })
  )
}

export const getProductByIdService = async (id) => {
  return (
    new Promise(async (res, rej) => {
      try {
        const producto = await obtenerProducto(id);
        res(producto);
      } catch (error) {
        rej();
      }
    })
  )
}

export const addProductService = async (product) => {
  return new Promise(async (res, rej) => {
    try {
      const addedProduct = await agregarProducto(product);
      res(addedProduct);
    } catch (error) {
      rej(error);
    }
  });
}

export const deleteProductService = async (id) => {
  return new Promise(async (res, rej) => {
    try {
      await eliminarProducto(id);
      res();
    } catch (error) {
      rej(error);
    }
  });
};