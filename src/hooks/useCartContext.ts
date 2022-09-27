import { useContext } from "react";

import CartContext from "../context/cartContext";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be usedinside CartContextProvider.");
  }

  return context;
};

export default useCartContext;
