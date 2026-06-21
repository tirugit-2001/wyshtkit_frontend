import { PlusCircleIcon, SendIcon } from "@/components/shared/icons/Icons";
import styles from "./MessageComposer.module.scss";

const MessageComposer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.composer}>
        <button type="button" className={styles.attachBtn} aria-label="Add attachment">
          <PlusCircleIcon size={22} />
        </button>
        <input
          className={styles.input}
          type="text"
          placeholder="Type a message..."
          aria-label="Message input"
        />
        <button type="button" className={styles.sendBtn} aria-label="Send message">
          <SendIcon size={20} />
        </button>
      </div>
    </footer>
  );
};

export default MessageComposer;
