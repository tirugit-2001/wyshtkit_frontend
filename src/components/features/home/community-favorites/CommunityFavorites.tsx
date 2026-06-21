import { PeopleIcon } from "@/components/shared/icons/Icons";
import ProductCard from "@/components/features/home/product-card/ProductCard";
import type { Product } from "@/pages/home/data";
import { communityFavorites } from "@/pages/home/data";
import styles from "./CommunityFavorites.module.scss";

type CommunityFavoritesProps = {
  onAdd?: (product: Product) => void;
};

const CommunityFavorites = ({ onAdd }: CommunityFavoritesProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <PeopleIcon size={20} />
          Community Favorites
        </h2>
        <a href="/favorites" className={styles.viewAll}>
          View All
        </a>
      </div>
      <div className={styles.scroll}>
        {communityFavorites.map((product) => (
          <ProductCard key={product.id} product={product} size="large" onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
};

export default CommunityFavorites;
