import {
  ArchiveIcon,
  EditIcon,
  EyeIcon,
  MoneyIcon,
  PlusIcon,
  ShoppingBagIcon,
} from "@/components/shared/icons/Icons";
import type { ProfileProduct } from "@/pages/profile/data";
import styles from "./ProfileProductCard.module.scss";

type ProfileProductCardProps = {
  product: ProfileProduct;
  manageEnabled: boolean;
};

const ProfileProductCard = ({ product, manageEnabled }: ProfileProductCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img src={product.imageUrl} alt={product.name} className={styles.image} />

        {manageEnabled && (
          <>
            <div className={styles.analytics}>
              <span>
                <EyeIcon size={14} /> {product.views}
              </span>
              <span>
                <ShoppingBagIcon size={14} /> {product.orders}
              </span>
              <span>
                <MoneyIcon size={14} /> {product.revenue}
              </span>
            </div>

            <div className={styles.manageOverlay}>
              <div className={styles.manageActions}>
                <button type="button" className={styles.editBtn}>
                  <EditIcon size={16} />
                  Edit
                </button>
                <button type="button" className={styles.hideBtn}>
                  <ArchiveIcon size={16} />
                  Hide
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={styles.body}>
        <h4 className={styles.title}>{product.name}</h4>
        <div className={styles.footer}>
          <span className={styles.price}>₹{product.price}</span>
          <button type="button" className={styles.addBtn} aria-label={`Add ${product.name}`}>
            <PlusIcon size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProfileProductCard;
