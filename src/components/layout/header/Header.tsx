import { useState } from "react";

import { ActivityDrawer } from "../../drawers";
import {
  BellIcon,
  CartIcon,
  ChevronDownIcon,
  LocationPinIcon,
  SearchIcon,
} from "../../shared/icons/Icons";
import styles from "./header.module.scss";

const Header = () => {
  const [isActivityOpen, setIsActivityOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.search}>
          <SearchIcon size={18} className={styles.searchIcon} />
          <input
            type="search"
            placeholder="Search for creators, items, or services..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.location}>
            <LocationPinIcon size={16} className={styles.locationPin} />
            <div className={styles.locationInfo}>
              <span className={styles.locationName}>
                Indiranagar
                <ChevronDownIcon size={14} />
              </span>
              <span className={styles.deliveryBadge}>15m Delivery</span>
            </div>
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Notifications"
            aria-expanded={isActivityOpen}
            onClick={() => setIsActivityOpen(true)}
          >
            <BellIcon />
          </button>
          <button
            type="button"
            className={`${styles.iconBtn} ${styles.cartBtn}`}
            aria-label="Cart"
          >
            <CartIcon />
          </button>
        </div>
      </header>

      <ActivityDrawer
        isOpen={isActivityOpen}
        onClose={() => setIsActivityOpen(false)}
      />
    </>
  );
};

export default Header;
