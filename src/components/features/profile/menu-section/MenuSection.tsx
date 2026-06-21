import { PlusIcon } from "@/components/shared/icons/Icons";
import { categorySectionTitles, profileProducts } from "@/pages/profile/data";
import type { MenuCategory } from "@/pages/profile/data";
import ProfileProductCard from "../profile-product-card/ProfileProductCard";
import styles from "./MenuSection.module.scss";

type MenuSectionProps = {
  category: MenuCategory;
  manageEnabled: boolean;
};

const MenuSection = ({ category, manageEnabled }: MenuSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>{categorySectionTitles[category]}</h2>
      </div>

      <div className={styles.grid}>
        {manageEnabled && (
          <button type="button" className={styles.createTile} aria-label="Create product">
            <span className={styles.createIcon}>
              <PlusIcon size={32} />
            </span>
          </button>
        )}

        {profileProducts.map((product) => (
          <ProfileProductCard
            key={product.id}
            product={product}
            manageEnabled={manageEnabled}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
