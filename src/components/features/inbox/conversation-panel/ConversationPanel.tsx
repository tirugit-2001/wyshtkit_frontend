import MessageComposer from "../message-composer/MessageComposer";
import MessageStream from "../message-stream/MessageStream";
import ThreadHeader from "../thread-header/ThreadHeader";
import styles from "./ConversationPanel.module.scss";

type ConversationPanelProps = {
  onOpenCheckout?: () => void;
};

const ConversationPanel = ({ onOpenCheckout }: ConversationPanelProps) => {
  return (
    <section className={styles.panel}>
      <ThreadHeader />
      <MessageStream onOpenCheckout={onOpenCheckout} />
      <MessageComposer />
    </section>
  );
};

export default ConversationPanel;
