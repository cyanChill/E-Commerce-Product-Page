import { useState } from "react";

import ShoppingCart from "./ShoppingCart";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.container}>
      <button
        className={styles.menuControl}
        data-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      />
      {/* Backdrop for mobile */}
      <div className={styles.backdrop} data-expanded={open} />

      {/* Site Logo */}
      <img src="/assets/logo.svg" alt="site logo" className={styles.logo} />

      {/* Navigation Links */}
      <ul className={styles.navLinks} data-expanded={open}>
        <li>
          <a href="/#" onClick={() => setOpen(false)}>
            Collections
          </a>
        </li>
        <li>
          <a href="/#" onClick={() => setOpen(false)}>
            Men
          </a>
        </li>
        <li>
          <a href="/#" onClick={() => setOpen(false)}>
            Women
          </a>
        </li>
        <li>
          <a href="/#" onClick={() => setOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="/#" onClick={() => setOpen(false)}>
            Contact
          </a>
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
