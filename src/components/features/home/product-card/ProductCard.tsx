import {
  BoltIcon,
  CheckIcon,
  PlusIcon,
  StarIcon,
  StoreIcon,
} from "@/components/shared/icons/Icons";
import type { Product } from "@/pages/home/data";
import styles from "./ProductCard.module.scss";

type ProductCardProps = {
  product: Product;
  size?: "default" | "large";
  onAdd?: (product: Product) => void;
};

const ProductCard = ({ product, size = "default", onAdd }: ProductCardProps) => {
  const isLowStock = product.status.type === "low-stock";

  return (
    <article className={`${styles.card} ${size === "large" ? styles.cardLarge : ""}`}>
      <div
        className={styles.image}
        style={{ background: product.imageGradient }}
      >
        {product.deliveryTime && (
          <span className={styles.deliveryBadge}>
            <BoltIcon size={10} />
            {product.deliveryTime}
          </span>
        )}
        {product.deliveryLabel && (
          <span className={styles.todayBadge}>{product.deliveryLabel}</span>
        )}
        <span className={styles.ratingBadge}>
          <StarIcon size={10} />
          {product.rating}
        </span>
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.title}>{product.title}</h3>
        <p
          className={`${styles.status} ${isLowStock ? styles.statusWarning : styles.statusSuccess}`}
        >
          {isLowStock ? <StoreIcon size={13} /> : <CheckIcon size={13} />}
          {product.status.text}
        </p>
        <div className={styles.footer}>
          <span className={styles.price}>₹{product.price.toLocaleString("en-IN")}</span>
          <button
            type="button"
            className={styles.addBtn}
            aria-label={`Add ${product.title}`}
            onClick={() => onAdd?.(product)}
          >
            <PlusIcon size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
