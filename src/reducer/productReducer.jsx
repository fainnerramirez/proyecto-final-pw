import { v4 as uuidv4 } from "uuid";

const sumaCantidadProducto = (state) => {
  return state.reduce((suma, producto) => suma + producto.cantidad, 0);
};

const sumaTotalProducto = (state) => {
  return state
    .reduce((suma, producto) => suma + producto.cantidad * producto.precio, 0)
    .toFixed(3);
};

export const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (
        !state.cartProducts.find((product) => product.id === action.payload.id)
      ) {
        state.cartProducts.push({
          ...action.payload,
          cantidad: 0,
        });
      }
      let rtn = {
        ...state,
        productCount: sumaCantidadProducto(state.cartProducts),
        total: sumaTotalProducto(state.cartProducts),
        cartProducts: [...state.cartProducts],
      };

      return rtn;
    case "INCREMENT":
      const cartProduct = {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              cantidad: product.cantidad + 1,
              agregado: true,
            };
          } else {
            return product;
          }
        }),
      };
      const newStateProduct = {
        ...cartProduct,
        productCount: sumaCantidadProducto(cartProduct.cartProducts),
        total: sumaTotalProducto(cartProduct.cartProducts),
      };
      return newStateProduct;

    case "DECREMENT":
      const newCartItemsInDecrease = {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              cantidad: product.cantidad > 0 ? product.cantidad - 1 : 0,
            };
          } else {
            return product;
          }
        }),
      };
      return {
        ...newCartItemsInDecrease,
        productCount: sumaCantidadProducto(newCartItemsInDecrease.cartProducts),
        total: sumaTotalProducto(newCartItemsInDecrease.cartProducts),
      };
    default:
      return state;
  }
};
