import {
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CommentBubbleIcon,
  HeartIcon,
  ImageIcon,
  MoreIcon,
  MusicNoteIcon,
  SendIcon,
  VerifiedIcon,
  VideoCameraIcon,
} from "@/components/shared/icons/Icons";
import { featuredPost } from "@/pages/feed/data";
import styles from "./FeaturedPost.module.scss";

const FeaturedPost = () => {
  const { slideCount, activeSlide } = featuredPost;

  return (
    <article className={styles.post}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Featured Post</span>
        <div className={styles.formatIcons}>
          <button type="button" className={styles.formatBtnActive} aria-label="Photos">
            <ImageIcon size={20} />
          </button>
          <button type="button" className={styles.formatBtn} aria-label="Video">
            <VideoCameraIcon size={20} />
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <header className={styles.postHeader}>
          <div className={styles.author}>
            <div className={styles.avatarRing}>
              <img src={featuredPost.avatarUrl} alt="" className={styles.avatar} />
            </div>
            <div>
              <div className={styles.authorName}>
                {featuredPost.author}
                <VerifiedIcon size={14} className={styles.verified} />
              </div>
              <span className={styles.meta}>
                {featuredPost.location} • {featuredPost.timeAgo}
              </span>
            </div>
          </div>
          <button type="button" className={styles.menuBtn} aria-label="More options">
            <MoreIcon size={18} />
          </button>
        </header>

        <div className={styles.media}>
          <img src={featuredPost.imageUrl} alt="Artisan sourdough" className={styles.mediaImage} />
          <div className={styles.mediaOverlay} />

          <button type="button" className={`${styles.navBtn} ${styles.navLeft}`} aria-label="Previous">
            <ChevronLeftIcon size={20} />
          </button>
          <button type="button" className={`${styles.navBtn} ${styles.navRight}`} aria-label="Next">
            <ChevronRightIcon size={20} />
          </button>

          <div className={styles.productTag}>
            <span className={styles.tagDot} />
            <span className={styles.tagLabel}>{featuredPost.productTag}</span>
          </div>

          <div className={styles.slideBadge}>
            <ImageIcon size={14} />
            {activeSlide}/{slideCount}
          </div>

          <div className={styles.audioLabel}>
            <MusicNoteIcon size={14} className={styles.spinIcon} />
            <span>{featuredPost.audioLabel}</span>
          </div>

          <div className={styles.carouselDots}>
            {Array.from({ length: slideCount }).map((_, i) => (
              <span key={i} className={`${styles.dot} ${i === 0 ? styles.dotActive : ""}`} />
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.actionRow}>
            <div className={styles.actionGroup}>
              <button type="button" className={`${styles.actionBtn} ${styles.actionLike}`}>
                <HeartIcon size={28} />
                <span>{featuredPost.likes}</span>
              </button>
              <button type="button" className={`${styles.actionBtn} ${styles.actionDefault}`}>
                <CommentBubbleIcon size={28} />
                <span>{featuredPost.comments}</span>
              </button>
              <button type="button" className={`${styles.actionBtn} ${styles.actionDefault}`} aria-label="Share">
                <SendIcon size={28} />
              </button>
            </div>
            <button type="button" className={`${styles.actionBtn} ${styles.actionDefault}`} aria-label="Save">
              <BookmarkIcon size={28} />
            </button>
          </div>

          <p className={styles.caption}>
            <strong>{featuredPost.handle}</strong> {featuredPost.caption}
          </p>
          <button type="button" className={styles.viewComments}>
            View all {featuredPost.comments} comments
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
