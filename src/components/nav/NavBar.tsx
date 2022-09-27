import ShoppingCart from "./ShoppingCart";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      {/* Site Logo */}
      <img src="/assets/logo.svg" alt="site logo" className={styles.logo} />

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <a href="/#">Collections</a>
        </li>
        <li>
          <a href="/#">Men</a>
        </li>
        <li>
          <a href="/#">Women</a>
        </li>
        <li>
          <a href="/#">About</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
      </ul>

      <div className={styles.rightActions}>
        {/* Cart Button */}
        <ShoppingCart />

        {/* Avatar */}
        <img
          src="/assets/image-avatar.png"
          alt="shopper avatar"
          className={styles.avatar}
        />
      </div>
    </nav>
  );
};

export default NavBar;
