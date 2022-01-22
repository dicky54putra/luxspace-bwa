import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

const localStorageCart = window.localStorage.getItem("cart") ?? "{}";
const initialState = {
  cart: JSON.parse(localStorageCart),
};

export function useGLobalContext() {
  const [state, dispatch] = useContext(Context);
  if (!state || !dispatch) {
    throw new Error(`useGlobalContext must be used within Provider`);
  }
  return { state, dispatch };
}

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const dataAddToCart = {
        ...state,
        cart: state.cart
          ? {
              ...state.cart,
              [action.item.id]: action.item,
            }
          : { [action.item.id]: action.item },
      };
      window.localStorage.setItem("cart", JSON.stringify(dataAddToCart.cart));
      return dataAddToCart;
    case "REMOVE_FROM_CART":
      const dataRemoveCart = {
        ...state,
        cart: Object.keys(state.cart)
          .filter((key) => +key !== +action.id)
          .reduce((acc, key) => {
            const item = state.cart[key];
            acc[item.id] = item;
            return acc;
          }, {}),
      };
      window.localStorage.setItem("cart", JSON.stringify(dataRemoveCart.cart));
      return dataRemoveCart;
    case "RESET_CART":
      window.localStorage.removeItem("cart");
      return {
        ...state,
        cart: initialState.cart,
      };
    default: {
      throw new Error(`Unhandle action type ${action.type}`);
    }
  }
}

export default function Provider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]} {...props} />;
}
