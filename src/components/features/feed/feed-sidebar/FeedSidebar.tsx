import {
  BikeIcon,
  FlameIcon,
  PlusIcon,
  ShoppingBagIcon,
  StoreIcon,
  TruckIcon,
} from "@/components/shared/icons/Icons";
import { nearbyActivity, shopProduct } from "@/pages/feed/data";
import styles from "./FeedSidebar.module.scss";

const activityIcons = {
  bag: ShoppingBagIcon,
  bike: BikeIcon,
  flame: FlameIcon,
};

const FeedSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Shop This Post</h3>
        <div className={styles.bento}>
          <button type="button" className={styles.shopMain}>
            <div className={styles.shopIcon}>
              <ShoppingBagIcon size={22} />
            </div>
            <div className={styles.shopInfo}>
              <strong>{shopProduct.name}</strong>
              <span>
                {shopProduct.bakery} • ₹{shopProduct.price}
              </span>
            </div>
            <span className={styles.addIcon}>
              <PlusIcon size={16} />
            </span>
          </button>
          <button type="button" className={styles.tile}>
            <div className={`${styles.tileIcon} ${styles.tileIconTeal}`}>
              <TruckIcon size={20} />
            </div>
            <span>15m Delivery</span>
          </button>
          <button type="button" className={styles.tile}>
            <div className={styles.tileIcon}>
              <StoreIcon size={20} />
            </div>
            <span>View Menu</span>
          </button>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitlePulse}>
          <span className={styles.pulseDot}>
            <span className={styles.ping} />
            <span className={styles.dotCore} />
          </span>
          Nearby Activity
        </h3>
        <ul className={styles.activityList}>
          {nearbyActivity.map(({ id, icon, title, subtitle }) => {
            const Icon = activityIcons[icon];
            return (
              <li key={id}>
                <button type="button" className={styles.activityCard}>
                  <div className={styles.activityIcon}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <strong>{title}</strong>
                    <span>{subtitle}</span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className={styles.footer}>
        <nav className={styles.footerLinks}>
          <a href="/about">About</a>
          <a href="/help">Help</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </nav>
        <p>© 2026 Luminous</p>
      </footer>
    </aside>
  );
};

export default FeedSidebar;
