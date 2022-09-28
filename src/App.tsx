import { ShopItems } from "./DUMMY_DATA";
import NavBar from "./components/nav/NavBar";
import ProductPage from "./components/product/product page/ProductPage";
import styles from "./App.module.css";

const DUMMY_ITEM = ShopItems["b1b2a9c5-5cdd-4857-b6dc-ce0def506b79"];

const App = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <ProductPage item={DUMMY_ITEM} />
    </div>
  );
};

export default App;
