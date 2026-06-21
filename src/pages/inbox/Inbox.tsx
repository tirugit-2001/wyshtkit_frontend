import { useState } from "react";

import { CheckoutPopup } from "@/components/popups";
import { ConversationPanel, MessageList } from "@/components/features/inbox";
import { useModal } from "@/hooks/useModal";
import type { InboxFilter } from "./data";
import styles from "./inbox.module.scss";

const Inbox = () => {
  const [filter, setFilter] = useState<InboxFilter>("All");
  const [activeThreadId, setActiveThreadId] = useState("melrose");
  const checkoutModal = useModal();

  return (
    <>
      <div className={styles.inbox}>
        <div className={styles.shell}>
          <MessageList
            filter={filter}
            activeThreadId={activeThreadId}
            onFilterChange={setFilter}
            onThreadSelect={setActiveThreadId}
          />
          <ConversationPanel onOpenCheckout={checkoutModal.open} />
        </div>
      </div>

      <CheckoutPopup isOpen={checkoutModal.isOpen} onClose={checkoutModal.close} />
    </>
  );
};

export default Inbox;
