import { createContext, useReducer, useState } from "react";
import { data } from "../data/Data";
import { ProductReducer } from "../reducer/productReducer";
import toast from "react-hot-toast";

export const contextProduct = createContext();
const notify = () =>
  toast.success("Producto agregado correctamente.", {
    position: "top-center",
  });

const initialState = {
  cartProducts: data,
  productCount: 0,
  total: 0.0,
  chechout: false,
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductReducer, initialState);
  const [filterValue, setFilterValue] = useState("");

  const handleAddProduct = (payload) => {
    dispatch({ type: "ADD_PRODUCT", payload });
  };

  const handleIncrementProduct = (payload) => {
    dispatch({ type: "INCREMENT", payload });
    notify();
  };

  const handleDecrementProduct = (payload) => {
    dispatch({ type: "DECREMENT", payload });
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
      }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ProductProvider;
