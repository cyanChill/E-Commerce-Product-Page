import { useContext } from "react";

import CartContext from "../context/cartContext";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used inside CartContextProvider.");
  }

  return context;
};

export default useCartContext;
