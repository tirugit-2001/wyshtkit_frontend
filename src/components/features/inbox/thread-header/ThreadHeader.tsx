import {
  ChevronDownIcon,
  MoreVertIcon,
  StoreIcon,
  SyncIcon,
  TimerIcon,
} from "@/components/shared/icons/Icons";
import { activeConversation } from "@/pages/inbox/data";
import OrderLifecycle from "../order-lifecycle/OrderLifecycle";
import styles from "./ThreadHeader.module.scss";

const ThreadHeader = () => {
  const { name, avatarUrl, orderId, previewDue, estimatedArrival } = activeConversation;

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.identity}>
          <img src={avatarUrl} alt="" className={styles.avatar} />
          <div>
            <h3 className={styles.name}>{name}</h3>
            <a href="/profile" className={styles.storeLink}>
              <StoreIcon size={16} />
              View Storefront
            </a>
            <p className={styles.orderId}>{orderId}</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.secondaryBtn}>
            Mark as Packed
          </button>
          <button type="button" className={styles.primaryBtn}>
            Dispatch Order
          </button>
          <div className={styles.timerBadge}>
            <TimerIcon size={16} />
            Preview due in {previewDue}
          </div>
          <div className={styles.arrivalBadge}>
            <span className={styles.pulseDot} />
            {estimatedArrival}
          </div>
          <button type="button" className={styles.moreBtn} aria-label="More options">
            <MoreVertIcon size={22} />
          </button>
        </div>
      </div>

      <details className={styles.lifecycleDetails} open>
        <summary className={styles.lifecycleSummary}>
          <span>
            <SyncIcon size={18} />
            Order Lifecycle: Review
          </span>
          <ChevronDownIcon size={18} className={styles.chevron} />
        </summary>
        <OrderLifecycle />
      </details>
    </header>
  );
};

export default ThreadHeader;
