import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  CleaningIcon,
  CloseIcon,
  DownloadIcon,
  EditIcon,
  FingerprintIcon,
  HomeIcon,
  InfoIcon,
  MinusIcon,
  PlusIcon,
  SparkleIcon,
} from "@/components/shared/icons/Icons";
import {
  checkoutBreakdown,
  checkoutItems,
  deliveryAddress,
  type CheckoutProductItem,
} from "./data";
import styles from "./checkoutPopup.module.scss";

type CheckoutPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HOLD_DURATION_MS = 1500;

const CheckoutPopup = ({ isOpen, onClose }: CheckoutPopupProps) => {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");
  const [gstEnabled, setGstEnabled] = useState(false);
  const [gstin, setGstin] = useState("");
  const [holding, setHolding] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [visible, setVisible] = useState(false);
  const holdTimerRef = useRef<number | undefined>(undefined);

  const product = checkoutItems.find(
    (item): item is CheckoutProductItem => item.type === "product",
  );
  const service = checkoutItems.find((item) => item.type === "service");

  useEffect(() => {
    if (!isOpen) {
      setVisible(false);
      setConfirmed(false);
      setHolding(false);
      return;
    }

    document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => setVisible(true));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(holdTimerRef.current);
    };
  }, [isOpen, onClose]);

  const startHold = () => {
    if (confirmed) return;
    setHolding(true);
    holdTimerRef.current = window.setTimeout(() => {
      setConfirmed(true);
      setHolding(false);
      window.setTimeout(onClose, 1000);
    }, HOLD_DURATION_MS);
  };

  const cancelHold = () => {
    setHolding(false);
    clearTimeout(holdTimerRef.current);
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`${styles.overlay} ${visible ? styles.overlayVisible : ""}`}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        className={`${styles.panel} ${visible ? styles.panelVisible : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <div>
            <h2 id="checkout-title" className={styles.title}>
              Review Order
            </h2>
            <p className={styles.subtitle}>Verify details for instant fulfillment</p>
          </div>
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">
            <CloseIcon size={20} />
          </button>
        </header>

        <div className={styles.body}>
          <section className={styles.section}>
            <p className={styles.sectionLabel}>Your Selections</p>
            <div className={styles.itemList}>
              {product && (
                <article className={styles.itemCard}>
                  <img src={product.imageUrl} alt="" className={styles.itemImage} />
                  <div className={styles.itemMain}>
                    <div className={styles.itemTitleRow}>
                      <h4 className={styles.itemName}>{product.name}</h4>
                      <button type="button" className={styles.changeBtn}>
                        Change
                      </button>
                      <EditIcon size={14} className={styles.editHint} />
                    </div>
                    <span className={styles.itemMeta}>
                      <InfoIcon size={14} />
                      {product.detail}
                    </span>
                  </div>
                  <div className={styles.itemPriceCol}>
                    <span className={styles.itemPrice}>₹{product.price}</span>
                    <div className={styles.qtyControl}>
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      >
                        <MinusIcon size={14} />
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => setQuantity((q) => q + 1)}
                      >
                        <PlusIcon size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              )}

              {service && (
                <article className={styles.itemCard}>
                  <div className={styles.serviceIcon}>
                    <CleaningIcon size={28} />
                  </div>
                  <div className={styles.itemMain}>
                    <div className={styles.itemTitleRow}>
                      <h4 className={styles.itemName}>{service.name}</h4>
                      <button type="button" className={styles.changeBtn}>
                        Change
                      </button>
                      <EditIcon size={14} className={styles.editHint} />
                    </div>
                    <span className={styles.itemMeta}>
                      <ClockIcon size={14} />
                      {service.detail}
                    </span>
                  </div>
                  <div className={styles.itemPriceCol}>
                    <span className={styles.itemPrice}>₹{service.price}</span>
                  </div>
                </article>
              )}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionLabel}>Delivery Destination</p>
              <button type="button" className={styles.changeBtn}>
                Change
              </button>
            </div>
            <div className={styles.addressCard}>
              <div className={styles.addressTop}>
                <span className={styles.addressIcon}>
                  <HomeIcon size={20} />
                </span>
                <div>
                  <p className={styles.addressLabel}>{deliveryAddress.label}</p>
                  <p className={styles.addressLine}>{deliveryAddress.line}</p>
                </div>
              </div>
              <div className={styles.addressGrid}>
                {deliveryAddress.fields.map((field) => (
                  <div key={field.label}>
                    <p className={styles.fieldLabel}>{field.label}</p>
                    <p className={styles.fieldValue}>{field.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>Instructions for Store</p>
            <div className={styles.instructionsCard}>
              <textarea
                className={styles.textarea}
                rows={1}
                placeholder="e.g., Make it spicy, No plastic cutlery"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.sectionLabel}>Spendable Currency</p>
            <div className={styles.rewardsCard}>
              <div className={styles.rewardsInfo}>
                <span className={styles.rewardsIcon}>
                  <SparkleIcon size={22} />
                </span>
                <div>
                  <p className={styles.rewardsTitle}>Wyshkit Rewards</p>
                  <p className={styles.rewardsAmount}>
                    ₹{checkoutBreakdown.rewardsAvailable.toFixed(2)} available
                  </p>
                </div>
              </div>
              <button type="button" className={styles.applyBtn}>
                Apply
              </button>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.invoiceCard}>
              <div className={styles.invoiceHeader}>
                <div className={styles.invoiceInfo}>
                  <BriefcaseIcon size={20} />
                  <div>
                    <p className={styles.invoiceTitle}>Business Invoicing</p>
                    <p className={styles.invoiceHint}>Add GSTIN for tax credits</p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={gstEnabled}
                  className={`${styles.toggle} ${gstEnabled ? styles.toggleOn : ""}`}
                  onClick={() => setGstEnabled((prev) => !prev)}
                >
                  <span className={styles.toggleThumb} />
                </button>
              </div>
              {gstEnabled && (
                <div className={styles.gstPanel}>
                  <input
                    className={styles.gstInput}
                    type="text"
                    placeholder="Enter 15-digit GSTIN"
                    value={gstin}
                    onChange={(event) => setGstin(event.target.value)}
                  />
                  <button type="button" className={styles.quoteBtn}>
                    <DownloadIcon size={16} />
                    Download Quote (INR)
                  </button>
                </div>
              )}
            </div>
          </section>

          <section className={styles.breakdown}>
            <div className={styles.breakdownRow}>
              <span>Subtotal</span>
              <span>₹{checkoutBreakdown.subtotal.toFixed(2)}</span>
            </div>
            <div className={`${styles.breakdownRow} ${styles.breakdownFree}`}>
              <span>Delivery Fee</span>
              <span>{checkoutBreakdown.deliveryFee}</span>
            </div>
            <div className={styles.breakdownRow}>
              <span>GST (5%)</span>
              <span>₹{checkoutBreakdown.gst.toFixed(2)}</span>
            </div>
            <div className={styles.breakdownTotal}>
              <span>To Pay</span>
              <span>₹{checkoutBreakdown.total.toFixed(2)}</span>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <button
            type="button"
            className={`${styles.holdBtn} ${holding ? styles.holdActive : ""}`}
            onMouseDown={startHold}
            onMouseUp={cancelHold}
            onMouseLeave={cancelHold}
            onTouchStart={startHold}
            onTouchEnd={cancelHold}
          >
            <span className={styles.holdProgress} />
            {confirmed ? (
              <span className={styles.holdConfirmed}>
                <CheckCircleIcon size={28} />
                Order Confirmed
              </span>
            ) : (
              <span className={styles.holdContent}>
                <FingerprintIcon size={32} />
                <span className={styles.holdText}>
                  <strong>Hold to Place Order</strong>
                  <small>Secure biometric authorization</small>
                </span>
              </span>
            )}
          </button>
        </footer>
      </div>
    </div>,
    document.body,
  );
};

export default CheckoutPopup;
