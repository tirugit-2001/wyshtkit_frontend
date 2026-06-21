import { CartIcon, MusicNoteIcon } from "@/components/shared/icons/Icons";
import { clipData } from "@/pages/clips/data";
import styles from "./ClipPlayer.module.scss";

const ClipPlayer = () => {
  return (
    <div className={styles.player}>
      <img src={clipData.posterUrl} alt="" className={styles.poster} />
      <div className={styles.gradient} />
      <div className={styles.overlay}>
        <div className={styles.userRow}>
          <div className={styles.avatarWrap}>
            <img src={clipData.avatarUrl} alt="" className={styles.avatar} />
          </div>
          <span className={styles.username}>{clipData.username}</span>
          <span className={styles.dot}>•</span>
          <button type="button" className={styles.followBtn}>
            Follow
          </button>
        </div>

        <p className={styles.caption}>{clipData.caption}</p>

        <div className={styles.audio}>
          <MusicNoteIcon size={16} className={styles.spinIcon} />
          <span>{clipData.audio}</span>
        </div>

        <button type="button" className={styles.shopBtn}>
          <CartIcon size={20} />
          Shop This Clip
        </button>
      </div>
    </div>
  );
};

export default ClipPlayer;
