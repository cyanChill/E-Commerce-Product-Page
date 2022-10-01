import React, { useState, useCallback } from "react";

import { ReactComponent as CartSVG } from "../../../assets/icon-cart.svg";
import useCartContext from "../../../hooks/useCartContext";
import { ShopItemType } from "../../../util/types";
import Gallery from "../../image gallery/Gallery";
import Tag from "../../ui/tag";
import Crement from "../../form element/crement/Crement";
import styles from "./ProductPage.module.css";

interface ProductPageInterface {
  item: ShopItemType;
}

const ProductPage = ({ item }: ProductPageInterface) => {
  const { addItem } = useCartContext();
  const [value, setValue] = useState(0);

  const updateQuantity = useCallback((val: number) => {
    setValue(val);
  }, []);

  const handleCartAddition = (e: React.FormEvent) => {
    e.preventDefault();
    addItem({ id: item.id, quantity: value });
    setValue(0);
  };

  return (
    <div className={styles.container}>
      <Gallery images={item.productImages} />

      <section className={styles.productInfo}>
        <header className={styles.productHeader}>
          <p className={styles.companyName}>Sneaker Company</p>
          <h1>{item.name}</h1>
        </header>

        <p className={styles.description}>{item.description}</p>

        {item.discount === 0 ? (
          <p className={styles.price}>${item.price.toFixed(2)}</p>
        ) : (
          <div className={styles.priceContainer}>
            <div className={styles.discountPrice}>
              <p>${(item.price * item.discount).toFixed(2)}</p>
              <Tag discount={item.discount} />
            </div>
            <p className={`strike ${styles.price}`}>${item.price.toFixed(2)}</p>
          </div>
        )}

        <form onSubmit={handleCartAddition} className={styles.action}>
          <Crement value={value} onChange={updateQuantity} />
          <button className={`button ${styles.btn}`} type="submit">
            <CartSVG className={styles.svg} /> Add to cart
          </button>
        </form>
      </section>
    </div>
  );
};

export default ProductPage;
