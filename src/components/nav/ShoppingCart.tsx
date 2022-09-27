import { useMemo, useState } from "react";

import useCartContext from "../../hooks/useCartContext";
import { ShopItems } from "../../DUMMY_DATA";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const { items, removeItem } = useCartContext();
  const [visible, setVisible] = useState(false);

  const totalItemQuantity = useMemo(() => {
    return items.reduce((prev, curr) => prev + curr.quantity, 0);
  }, [items]);

  return (
    <div className={styles.container}>
      <div
        className={styles.cartIcon}
        data-items={totalItemQuantity}
        onClick={() => setVisible((prev) => !prev)}
      >
        <img src="/assets/icon-cart.svg" alt="shopping cart icon" />
      </div>

      <div
        className={`${styles.cartSummary} ${!visible ? styles.hidden : ""}`}
        onBlur={() => setVisible(false)}
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

                    <img
                      src="/assets/icon-delete.svg"
                      alt="remove cart item icon"
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
