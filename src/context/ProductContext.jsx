import { createContext, useReducer, useState } from "react";
import { data } from "../data/Data";
import { ProductReducer } from "../reducer/productReducer";
import { v4 as uuidv4 } from "uuid";
import { toastView } from "../utils/Toast.config";

export const contextProduct = createContext();

const initialState = {
  cartProducts: data,
  productCount: 0,
  total: 0.0,
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductReducer, initialState);
  const [filterValue, setFilterValue] = useState("");
  //values form
  const [nameProduct, setNameProduct] = useState("");
  const [preciProduct, setPriceProduct] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (nameProduct !== "" && preciProduct !== "") {
      if (
        !products.cartProducts.find(
          (product) =>
            product.nombre.toUpperCase() === nameProduct.toUpperCase()
        )
      ) {
        const newProduct = {
          id: uuidv4(),
          nombre: nameProduct,
          precio: preciProduct,
        };

        dispatch({ type: "ADD_PRODUCT", payload: newProduct });
        toastView("El producto ha sido creado", "success");
      } else {
        toastView("Ya existe un producto con este nombre", "error");
      }
    } else {
      toastView("LLene todos los campos del formulario", "error");
    }
  };

  const handleIncrementProduct = (payload) => {
    dispatch({ type: "INCREMENT", payload });
    toastView("Producto agregado correctamente", "success");
  };

  const handleDecrementProduct = (payload) => {
    dispatch({ type: "DECREMENT", payload });
  };

  const handlePayProducts = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR" });
  };

  return (
    <contextProduct.Provider
      value={{
        ...products,
        handleAddProduct,
        handleIncrementProduct,
        handleDecrementProduct,
        filterValue,
        setFilterValue,
        setNameProduct,
        setPriceProduct,
        handlePayProducts,
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ProductProvider;
