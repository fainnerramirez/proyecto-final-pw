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
      if (!state.find((product) => product.id === action.payload.id)) {
        state.cartProducts.push({
          ...action.payload,
          cantidad: 1,
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
            return { ...product, cantidad: product.cantidad + 1 };
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
    default:
      return state;
  }
};
