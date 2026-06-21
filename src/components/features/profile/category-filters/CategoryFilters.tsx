import type { MenuCategory } from "@/pages/profile/data";
import { menuCategories } from "@/pages/profile/data";
import styles from "./CategoryFilters.module.scss";

type CategoryFiltersProps = {
  activeCategory: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
};

const CategoryFilters = ({ activeCategory, onCategoryChange }: CategoryFiltersProps) => {
  return (
    <div className={styles.filters} role="tablist" aria-label="Menu categories">
      {menuCategories.map((category) => (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={activeCategory === category}
          className={`${styles.pill} ${activeCategory === category ? styles.pillActive : ""}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters;
