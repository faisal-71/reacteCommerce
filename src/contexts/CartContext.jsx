import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing)  {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case "INCREMENT_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const incrementQty = (id) => {
    dispatch({ type: "INCREMENT_QTY", payload: id });
  };

  const decrementQty = (id) => {
    dispatch({ type: "DECREMENT_QTY", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
 
  const cartTotal = state.cartItems.reduce(
    (acc, item) => acc + (item.price*45) * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
