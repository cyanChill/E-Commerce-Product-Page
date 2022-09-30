import { useMemo, useState, useEffect, useRef } from "react";

import { ReactComponent as CartSVG } from "../../assets/icon-cart.svg";
import { ReactComponent as DeleteSVG } from "../../assets/icon-delete.svg";
import useCartContext from "../../hooks/useCartContext";
import { ShopItems } from "../../DUMMY_DATA";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const { items, removeItem } = useCartContext();
  const [visible, setVisible] = useState(false);
  const cartCtrlRef = useRef<HTMLDivElement | null>(null);
  const cartSummRef = useRef<HTMLDivElement | null>(null);

  const totalItemQuantity = useMemo(() => {
    return items.reduce((prev, curr) => prev + curr.quantity, 0);
  }, [items]);

  useEffect(() => {
    const closeIfNotCart = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        !cartSummRef.current ||
        !cartCtrlRef.current ||
        !target ||
        cartCtrlRef.current.contains(target as Node)
      )
        return;

      if (!cartSummRef.current.contains(target as Node)) {
        setVisible(false);
      }
    };
    if (cartSummRef.current && cartCtrlRef.current) {
      window.addEventListener("mousedown", closeIfNotCart);
    }

    return () => {
      window.removeEventListener("mousedown", closeIfNotCart);
    };
  }, [cartSummRef, cartCtrlRef]);

  return (
    <div className={styles.container}>
      <div
        className={styles.cartIcon}
        data-items={totalItemQuantity}
        onClick={() => setVisible((prev) => !prev)}
        ref={cartCtrlRef}
      >
        <CartSVG />
      </div>

      <div
        className={`${styles.cartSummary} ${!visible ? styles.hidden : ""}`}
        data-visible={visible}
        ref={cartSummRef}
      >
        <p>Cart</p>
        <hr />
        <div className={styles.cartItems}>
          {items.length === 0 ? (
            <p className={styles.empty}>Your cart is empty.</p>
          ) : (
            <>
              {items.map((item) => {
                const specItem = ShopItems[item.id];
                const itemThumb = specItem.productImages[0].thumbnail;
                const itemPrice = specItem.price * specItem.discount;
                const sumPrice = itemPrice * item.quantity;

                return (
                  <div key={item.id} className={styles.cartItem}>
                    <img
                      src={itemThumb}
                      alt="product thumbnail"
                      className={styles.itemThumbnail}
                    />

                    <div className={styles.itemInfo}>
                      <p>{specItem.name}</p>
                      <p>
                        ${itemPrice.toFixed(2)} &times; {item.quantity}{" "}
                        <b>${sumPrice}</b>
                      </p>
                    </div>

                    <DeleteSVG
                      onClick={() => removeItem(item.id)}
                      className={styles.delete}
                    />
                  </div>
                );
              })}

              <button className="button">Checkout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
