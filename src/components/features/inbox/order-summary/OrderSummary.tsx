import { CoffeeIcon } from "@/components/shared/icons/Icons";
import { orderSummary } from "@/pages/inbox/data";
import styles from "./OrderSummary.module.scss";

type OrderSummaryProps = {
  onOpenCheckout?: () => void;
};

const OrderSummary = ({ onOpenCheckout }: OrderSummaryProps) => {
  return (
    <button type="button" className={styles.card} onClick={onOpenCheckout}>
      <div className={styles.header}>
        <span className={styles.label}>{orderSummary.title}</span>
        <span className={styles.total}>₹{orderSummary.total} Total</span>
      </div>

      <div className={styles.items}>
        {orderSummary.items.map((item) => (
          <div key={item.id} className={styles.item}>
            {"imageUrl" in item ? (
              <img src={item.imageUrl} alt="" className={styles.thumb} />
            ) : (
              <div className={styles.iconThumb}>
                <CoffeeIcon size={22} />
              </div>
            )}
            <div className={styles.itemBody}>
              <p className={styles.itemName}>{item.name}</p>
              <p className={`${styles.itemStatus} ${styles[`status_${item.statusAccent}`]}`}>
                {item.status} • ₹{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </button>
  );
};

export default OrderSummary;
