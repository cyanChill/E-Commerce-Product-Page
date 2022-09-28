import React from "react";

import { ShopItemType } from "../../../util/types";
import Gallery from "../../image gallery/Gallery";
import Tag from "../../ui/tag";
import Crement from "../../form element/crement/Crement";
import styles from "./ProductPage.module.css";

interface ProductPageInterface {
  item: ShopItemType;
}

const ProductPage = ({ item }: ProductPageInterface) => {
  const handleCartAddition = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Gallery />

      <section className={styles.productInfo}>
        <header className={styles.productHeader}>
          <p className={styles.companyName}>Sneaker Company</p>
          <h1>{item.name}</h1>
        </header>

        <p className={styles.description}>{item.description}</p>

        {item.discount === 0 ? (
          <p className={styles.price}>${item.price}</p>
        ) : (
          <div className={styles.priceContainer}>
            <div className={styles.discountPrice}>
              <p>${(item.price * item.discount).toFixed(2)}</p>
              <Tag discount={item.discount} />
            </div>
            <p className={`strike ${styles.price}`}>${item.price}</p>
          </div>
        )}

        <form onSubmit={handleCartAddition} className={styles.action}>
          <Crement />
          <button className="button" type="submit">
            Add to cart
          </button>
        </form>
      </section>
    </div>
  );
};

export default ProductPage;
