import {
  FingerprintIcon,
  PackageIcon,
  ShoppingBagIcon,
  VerifiedIcon,
} from "@/components/shared/icons/Icons";
import { inboxMessages, type InboxMessage, type ThreadAccent } from "@/pages/inbox/data";
import OrderSummary from "../order-summary/OrderSummary";
import styles from "./MessageStream.module.scss";

type MessageStreamProps = {
  onOpenCheckout?: () => void;
};

const accentClass = (accent?: ThreadAccent) =>
  accent ? styles[`accent_${accent}`] : "";

const MessageAvatar = ({ message }: { message: InboxMessage }) => {
  if (message.avatarUrl) {
    return <img src={message.avatarUrl} alt="" className={styles.avatarImage} />;
  }

  const Icon =
    message.icon === "bag"
      ? ShoppingBagIcon
      : message.icon === "inventory"
        ? PackageIcon
        : VerifiedIcon;

  return (
    <div className={`${styles.iconAvatar} ${accentClass(message.iconAccent)}`}>
      <Icon size={20} />
    </div>
  );
};

const MessageStream = ({ onOpenCheckout }: MessageStreamProps) => {
  return (
    <div className={styles.stream}>
      <OrderSummary onOpenCheckout={onOpenCheckout} />

      {inboxMessages.map((message) => {
        const isOrderMessage = message.title === "Order Placed";

        return (
          <article key={message.id} className={styles.message}>
            <MessageAvatar message={message} />
            <div className={styles.content}>
              <time className={styles.time}>{message.time}</time>

              {message.kind === "proof" && message.proof ? (
                <div className={styles.proofBubble}>
                  <p className={styles.proofTitle}>{message.proof.title}</p>
                  <div className={styles.proofCard}>
                    <div className={styles.proofImageWrap}>
                      <img src={message.proof.imageUrl} alt="" className={styles.proofImage} />
                    </div>
                    <p className={styles.proofDescription}>{message.proof.description}</p>
                    <button type="button" className={styles.tweakBtn}>
                      Request Tweak
                    </button>
                    <button type="button" className={styles.approveBtn}>
                      <FingerprintIcon size={20} />
                      Hold to Approve &amp; Start Production
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className={`${styles.bubble} ${message.kind === "merchant" ? styles.bubbleMerchant : ""} ${isOrderMessage ? styles.bubbleOrder : ""}`}
                  onClick={isOrderMessage ? onOpenCheckout : undefined}
                >
                  {message.title && <p className={styles.bubbleTitle}>{message.title}</p>}
                  <p className={styles.bubbleBody}>
                    {message.boldFragment ? (
                      <>
                        Standard item <strong>({message.boldFragment})</strong> has been secured
                        and packed. It will ship together with your personalized item.
                      </>
                    ) : (
                      message.body
                    )}
                  </p>
                </button>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MessageStream;
