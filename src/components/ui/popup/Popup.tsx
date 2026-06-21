import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./popup.module.scss";

type PopupSize = "sm" | "md" | "lg";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: PopupSize;
  closeOnBackdrop?: boolean;
  ariaLabelledBy?: string;
};

const Popup = ({
  isOpen,
  onClose,
  children,
  size = "md",
  closeOnBackdrop = true,
  ariaLabelledBy,
}: PopupProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={closeOnBackdrop ? onClose : undefined}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        className={`${styles.panel} ${styles[size]}`}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Popup;
