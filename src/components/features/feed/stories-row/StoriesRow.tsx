import { PlusIcon } from "@/components/shared/icons/Icons";
import { stories } from "@/pages/feed/data";
import styles from "./StoriesRow.module.scss";

const StoriesRow = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        {stories.map((story) => (
          <button key={story.id} type="button" className={styles.story}>
          <div className={styles.avatarWrap}>
            <div
              className={`${styles.ring} ${story.hasRing ? styles.hasRing : ""} ${story.muted ? styles.mutedRing : ""}`}
            >
              {story.imageUrl ? (
                <img
                  src={story.imageUrl}
                  alt=""
                  className={`${styles.avatarImg} ${story.isYours ? styles.avatarMuted : ""}`}
                />
              ) : (
                <div
                  className={`${styles.initials} ${story.floral ? styles.initialsFloral : ""}`}
                >
                  {story.initials}
                </div>
              )}
            </div>
            {story.isYours && (
              <span className={styles.addBadge}>
                <PlusIcon size={14} />
              </span>
            )}
            {story.isLive && <span className={styles.liveBadge}>LIVE</span>}
          </div>
          <span className={`${styles.label} ${story.muted ? styles.labelMuted : ""}`}>
            {story.label}
          </span>
        </button>
        ))}
      </div>
    </div>
  );
};

export default StoriesRow;
