import { createContext, useState } from "react";

import { CartItem, ProviderProps } from "../util/types";

interface CartContextInterface {
  items: CartItem[];
  addItem: (newItem: CartItem) => void;
  incrementItem: (itemId: string) => void;
  decrementItem: (itemId: string) => void;
}

const CartContext = createContext<CartContextInterface | null>(null);

const CartProvider = ({ children }: ProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    if (items.filter((item) => item.id === newItem.id)) {
      // Add to existing item if "newItem" exists in cart
      setItems((prev) => {
        return prev.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: item.quantity + newItem.quantity };
          } else {
            return item;
          }
        });
      });
    } else {
      setItems((prev) => [...prev, newItem]);
    }
  };

  const incrementItem = (itemId: string) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) return { ...item, quantity: item.quantity + 1 };
        else return item;
      });
    });
  };

  const decrementItem = (itemId: string) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === itemId)
            return { ...item, quantity: item.quantity - 1 };
          else return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, incrementItem, decrementItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
