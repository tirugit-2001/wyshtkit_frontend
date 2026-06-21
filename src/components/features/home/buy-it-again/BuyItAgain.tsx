import ProductCard from "@/components/features/home/product-card/ProductCard";
import type { Product } from "@/pages/home/data";
import { buyAgainProducts } from "@/pages/home/data";
import styles from "./BuyItAgain.module.scss";

type BuyItAgainProps = {
  onAdd?: (product: Product) => void;
};

const BuyItAgain = ({ onAdd }: BuyItAgainProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Buy it Again</h2>
        <a href="/orders" className={styles.viewAll}>
          View All
        </a>
      </div>
      <div className={styles.grid}>
        {buyAgainProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
};

export default BuyItAgain;
