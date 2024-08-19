import Counter from "@/components/Counter/Counter";
import styles from "./Products.module.css";

const ProductsPage = () => {
  return (
    <div>
      <h1 className={styles.heading}>This is ProductsPage component</h1>
      <Counter />
    </div>
  );
};

export default ProductsPage;
