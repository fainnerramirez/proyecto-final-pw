import { createContext, useReducer, useState } from "react";
import { data } from "../data/Data";
import { ProductReducer } from "../reducer/productReducer";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

export const contextProduct = createContext();

const notifyAddProduct = () =>
  toast.success("Producto agregado correctamente.", {
    position: "top-center",
  });

const notifyCreateProduct = () =>
  toast.success("El producto ha sido creado", {
    position: "top-center",
  });

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
    const newProduct = {
      id: uuidv4(),
      nombre: nameProduct,
      precio: preciProduct,
    };

    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    notifyCreateProduct();
  };

  const handleIncrementProduct = (payload) => {
    dispatch({ type: "INCREMENT", payload });
    notifyAddProduct();
  };

  const handleDecrementProduct = (payload) => {
    dispatch({ type: "DECREMENT", payload });
  };

  const handlePayProducts = () => {
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
