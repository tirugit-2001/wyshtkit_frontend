import { useState } from "react";

import { Drawer } from "../../ui";
import { CloseIcon, CroissantIcon, MoneyIcon } from "../../shared/icons/Icons";
import {
  activityFilters,
  filterActivity,
  type ActivityFilter,
} from "./data";
import styles from "./activityDrawer.module.scss";

type ActivityDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ActivityDrawer = ({ isOpen, onClose }: ActivityDrawerProps) => {
  const [activeFilter, setActiveFilter] = useState<ActivityFilter>("all");
  const items = filterActivity(activeFilter);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} ariaLabelledBy="activity-title">
      <div className={styles.drawer}>
        <header className={styles.header}>
          <h2 id="activity-title" className={styles.title}>
            Activity
          </h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close activity panel"
          >
            <CloseIcon size={20} />
          </button>
        </header>

        <div className={styles.filters} role="tablist" aria-label="Activity filters">
          {activityFilters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeFilter === id}
              className={`${styles.filter} ${activeFilter === id ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.list}>
          {items.map((item) => {
            if (item.type === "social") {
              return (
                <article key={item.id} className={styles.card}>
                  <div
                    className={styles.avatar}
                    style={{ background: item.avatarGradient }}
                    aria-hidden="true"
                  />
                  <div className={styles.cardBody}>
                    <p className={styles.cardText}>
                      <strong>{item.user}</strong> {item.message}
                    </p>
                    <div className={styles.cardActions}>
                      <button type="button" className={styles.btnReply}>
                        Reply
                      </button>
                      <button type="button" className={styles.btnFollow}>
                        Follow
                      </button>
                    </div>
                    <span className={styles.timestamp}>{item.timestamp}</span>
                  </div>
                </article>
              );
            }

            if (item.type === "commerce") {
              return (
                <article
                  key={item.id}
                  className={`${styles.card} ${styles.cardHighlighted}`}
                >
                  <div className={`${styles.iconCircle} ${styles.iconCommerce}`}>
                    <MoneyIcon size={16} />
                  </div>
                  <div className={styles.cardBody}>
                    <p className={styles.cardTitle}>{item.title}</p>
                    <p className={styles.cardDetails}>{item.details}</p>
                    <div className={styles.cardActions}>
                      <button type="button" className={styles.btnAccept}>
                        Accept
                      </button>
                      <button type="button" className={styles.btnOutline}>
                        View Order
                      </button>
                    </div>
                    <span className={styles.timestamp}>{item.timestamp}</span>
                  </div>
                </article>
              );
            }

            return (
              <article key={item.id} className={styles.card}>
                <div className={`${styles.iconCircle} ${styles.iconOrder}`}>
                  <CroissantIcon size={16} />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardText}>{item.title}</p>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <div className={styles.orderFooter}>
                    <span className={styles.estimate}>{item.estimate}</span>
                    <button type="button" className={styles.btnTrack}>
                      Track
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

export default ActivityDrawer;
