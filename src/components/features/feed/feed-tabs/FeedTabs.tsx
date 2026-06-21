import { useState } from "react";

import { feedTabs, type FeedTab } from "@/pages/feed/data";
import styles from "./FeedTabs.module.scss";

const FeedTabs = () => {
  const [activeTab, setActiveTab] = useState<FeedTab>("trending");

  return (
    <div className={styles.wrap}>
      <div className={styles.tabs} role="tablist">
        {feedTabs.map(({ id, label, dot }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            className={`${styles.tab} ${activeTab === id ? styles.tabActive : ""}`}
            onClick={() => setActiveTab(id)}
          >
            {label}
            {dot && <span className={`${styles.dot} ${styles[dot]}`} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedTabs;
