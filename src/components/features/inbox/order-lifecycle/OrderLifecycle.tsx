import { lifecycleSteps } from "@/pages/inbox/data";
import styles from "./OrderLifecycle.module.scss";

const OrderLifecycle = () => {
  return (
    <div className={styles.track}>
      {lifecycleSteps.map((step) => (
        <div key={step.id} className={styles.step}>
          <div
            className={`${styles.bar} ${styles[`bar_${step.state}`]}`}
          />
          <span className={`${styles.label} ${styles[`label_${step.state}`]}`}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OrderLifecycle;
