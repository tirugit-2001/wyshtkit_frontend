import { ClipActions, ClipPlayer } from "@/components/features/clips";
import styles from "./clips.module.scss";

const Clips = () => {
  return (
    <div className={styles.clips}>
      <div className={styles.stage}>
        <ClipPlayer />
        <ClipActions />
      </div>
    </div>
  );
};

export default Clips;
