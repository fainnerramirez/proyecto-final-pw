import { createContext, useReducer } from "react";
import { data } from "../data/Data";
import { ProductReducer } from "../reducer/productReducer";

export const contextProduct = createContext();

const initialState = {
  cartProducts: data,
  productCount: 0,
  total: 0.0,
  chechout: false,
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductReducer, initialState);

  const handleAddProduct = (payload) => {
    dispatch({ type: "ADD_PRODUCT", payload });
  };

  const handleIncrementProduct = (payload) => {
    dispatch({ type: "INCREMENT", payload });
  };

  return (
    <contextProduct.Provider
      value={{ ...products, handleAddProduct, handleIncrementProduct }}
    >
      {children}
    </contextProduct.Provider>
  );
};

export default ProductProvider;
