import { FeaturedPost, FeedTabs, StoriesRow } from "@/components/features/feed";
import styles from "./feed.module.scss";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.main}>
        <StoriesRow />
        <FeedTabs />
        <FeaturedPost />
      </div>
      {/* <FeedSidebar /> */}
    </div>
  );
};

export default Feed;
