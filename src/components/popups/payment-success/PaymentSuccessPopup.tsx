import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Popup } from "../../ui";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
} from "../../shared/icons/Icons";
import {
  ADD_ITEMS_COUNTDOWN_SECONDS,
  defaultOrderItem,
  defaultTimeline,
  type PaymentOrderItem,
  type TimelineStep,
} from "./data";
import styles from "./paymentSuccess.module.scss";

type PaymentSuccessPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  orderId?: string;
  item?: PaymentOrderItem;
  timeline?: TimelineStep[];
  onGoToInbox?: () => void;
};

const formatCountdown = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
};

const PaymentSuccessPopup = ({
  isOpen,
  onClose,
  orderId = "OHF-99281",
  item = defaultOrderItem,
  timeline = defaultTimeline,
  onGoToInbox,
}: PaymentSuccessPopupProps) => {
  const [countdown, setCountdown] = useState(ADD_ITEMS_COUNTDOWN_SECONDS);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(ADD_ITEMS_COUNTDOWN_SECONDS);
      return;
    }

    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleGoToInbox = () => {
    onGoToInbox?.();
    onClose();
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} ariaLabelledBy="payment-success-title">
      <div className={styles.content}>
        <header className={styles.header}>
          <CheckCircleIcon size={22} className={styles.successIcon} />
          <h2 id="payment-success-title" className={styles.title}>
            Payment Successful!
          </h2>
          <p className={styles.orderId}>ORDER ID: #{orderId}</p>
        </header>

        <div className={styles.orderCard}>
          <div
            className={styles.orderImage}
            style={{ background: item.imageGradient }}
            role="img"
            aria-label={item.name}
          />
          <div className={styles.orderDetails}>
            <strong>{item.name}</strong>
            <span>{item.details}</span>
          </div>
          <span className={styles.orderPrice}>
            ₹{item.price.toLocaleString("en-IN")}
          </span>
        </div>

        <ol className={styles.timeline}>
          {timeline.map((step, index) => (
            <li
              key={step.label}
              className={`${styles.timelineStep} ${styles[step.status]}`}
            >
              <div className={styles.timelineMarker}>
                {step.status === "completed" ? (
                  <CheckCircleIcon size={18} className={styles.markerCompleted} />
                ) : (
                  <span className={styles.markerDot} />
                )}
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineLabel}>{step.label}</span>
                {step.description && (
                  <p className={styles.timelineDesc}>{step.description}</p>
                )}
              </div>
              {index < timeline.length - 1 && <span className={styles.timelineLine} />}
            </li>
          ))}
        </ol>

        <div className={styles.alert}>
          <ClockIcon size={16} className={styles.alertIcon} />
          <p>
            Forgot something? Add items to this delivery in the next{" "}
            <strong>{formatCountdown(countdown)}</strong>
          </p>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.primaryBtn} onClick={handleGoToInbox}>
            Go to Inbox for Preview
            <ArrowRightIcon size={16} />
          </button>
          <Link to="/" className={styles.secondaryLink} onClick={onClose}>
            Back to Home
          </Link>
        </div>
      </div>
    </Popup>
  );
};

export default PaymentSuccessPopup;
