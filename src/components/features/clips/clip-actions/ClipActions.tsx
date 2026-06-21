import {
  BookmarkIcon,
  CommentBubbleIcon,
  HeartIcon,
  MoreIcon,
  SendIcon,
} from "@/components/shared/icons/Icons";
import { clipActions } from "@/pages/clips/data";
import styles from "./ClipActions.module.scss";

const iconMap = {
  heart: HeartIcon,
  comment: CommentBubbleIcon,
  bookmark: BookmarkIcon,
  send: SendIcon,
  more: MoreIcon,
};

const ClipActions = () => {
  return (
    <div className={styles.actions}>
      {clipActions.map(({ id, label, icon }) => {
        const Icon = iconMap[icon];
        return (
          <button
            key={id}
            type="button"
            className={styles.actionBtn}
            aria-label={label || id}
          >
            <span className={styles.iconWrap}>
              <Icon size={28} />
            </span>
            {label && <span className={styles.label}>{label}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default ClipActions;
