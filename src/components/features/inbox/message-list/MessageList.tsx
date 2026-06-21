import { CartIcon, MoneyIcon } from "@/components/shared/icons/Icons";
import {
  inboxFilters,
  inboxThreads,
  type InboxFilter,
  type InboxThread,
  type ThreadAccent,
} from "@/pages/inbox/data";
import styles from "./MessageList.module.scss";

type MessageListProps = {
  filter: InboxFilter;
  activeThreadId: string;
  onFilterChange: (filter: InboxFilter) => void;
  onThreadSelect: (threadId: string) => void;
};

const accentClass = (accent: ThreadAccent) => styles[`accent_${accent}`];

const ThreadAvatar = ({ thread }: { thread: InboxThread }) => {
  if (thread.icon === "cart") {
    return (
      <div className={`${styles.avatar} ${accentClass("teal")}`}>
        <CartIcon size={22} />
      </div>
    );
  }

  if (thread.avatarUrl) {
    return <img src={thread.avatarUrl} alt="" className={styles.avatarImage} />;
  }

  return (
    <div className={`${styles.avatar} ${accentClass(thread.avatarAccent ?? "pink")}`}>
      {thread.initials}
    </div>
  );
};

const MessageList = ({
  filter,
  activeThreadId,
  onFilterChange,
  onThreadSelect,
}: MessageListProps) => {
  return (
    <aside className={styles.list}>
      <div className={styles.header}>
        <h2 className={styles.title}>Messages</h2>
        <div className={styles.filters}>
          {inboxFilters.map((item) => (
            <button
              key={item}
              type="button"
              className={`${styles.filterBtn} ${filter === item ? styles.filterActive : ""}`}
              onClick={() => onFilterChange(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.threads}>
        {inboxThreads.map((thread) => {
          const isActive = thread.id === activeThreadId;
          const tintClass = thread.backgroundTint ? accentClass(thread.backgroundTint) : "";
          const borderClass = thread.borderAccent ? styles[`border_${thread.borderAccent}`] : "";

          return (
            <button
              key={thread.id}
              type="button"
              className={`${styles.thread} ${tintClass} ${borderClass} ${isActive ? styles.threadActive : ""}`}
              onClick={() => onThreadSelect(thread.id)}
            >
              <ThreadAvatar thread={thread} />
              <div className={styles.threadBody}>
                <div className={styles.threadTop}>
                  <span className={styles.threadTitle}>{thread.title}</span>
                  <span
                    className={`${styles.threadTime} ${thread.urgent ? accentClass("teal") : ""} ${thread.time === "Just now" ? accentClass("pink") : ""}`}
                  >
                    {thread.time}
                  </span>
                </div>
                <div className={styles.statusRow}>
                  <span
                    className={`${styles.statusDot} ${thread.pulse ? styles.statusDotPulse : ""} ${accentClass(thread.statusAccent)}`}
                  />
                  <span className={`${styles.statusLabel} ${accentClass(thread.statusAccent)}`}>
                    {thread.statusLabel}
                  </span>
                </div>
                <p className={styles.preview}>{thread.preview}</p>
                {thread.showRewards && (
                  <span className={styles.rewardsBtn}>
                    <MoneyIcon size={14} />
                    Rewards
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default MessageList;
