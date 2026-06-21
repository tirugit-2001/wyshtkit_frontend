import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./drawer.module.scss";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabelledBy?: string;
  closeOnBackdrop?: boolean;
};

const Drawer = ({
  isOpen,
  onClose,
  children,
  ariaLabelledBy,
  closeOnBackdrop = true,
}: DrawerProps) => {
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
    <div
      className={styles.overlay}
      onClick={closeOnBackdrop ? onClose : undefined}
      aria-hidden={!isOpen}
    >
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        className={styles.panel}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </aside>
    </div>,
    document.body,
  );
};

export default Drawer;
