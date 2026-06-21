import {
  BoltIcon,
  ChartIcon,
  PeopleIcon,
  SettingsIcon,
  StarIcon,
  CameraIcon,
} from "@/components/shared/icons/Icons";
import { profileData } from "@/pages/profile/data";
import styles from "./ProfileHeader.module.scss";

type ProfileHeaderProps = {
  manageEnabled: boolean;
  onManageChange: (enabled: boolean) => void;
};

const ProfileHeader = ({ manageEnabled, onManageChange }: ProfileHeaderProps) => {
  return (
    <section className={styles.header}>
      <button type="button" className={styles.cover}>
        <img src={profileData.bannerUrl} alt="" className={styles.coverImage} />
        <div className={styles.coverOverlay}>
          <span className={styles.changeBanner}>
            <CameraIcon size={20} />
            <span>Change Banner</span>
          </span>
        </div>
      </button>

      <div className={styles.infoArea}>
        <div className={styles.topRow}>
          <button type="button" className={styles.avatarBtn}>
            <img src={profileData.avatarUrl} alt="" className={styles.avatar} />
            <span className={styles.avatarOverlay}>
              <CameraIcon size={24} />
            </span>
          </button>

          <div className={styles.actions}>
            <button type="button" className={styles.actionBtn}>
              <ChartIcon size={18} />
              Analytics
            </button>
            <button type="button" className={styles.actionBtn}>
              <SettingsIcon size={18} />
              Settings
            </button>
            <button
              type="button"
              className={styles.manageBtn}
              onClick={() => onManageChange(!manageEnabled)}
            >
              <span>Manage</span>
              <span
                role="switch"
                aria-checked={manageEnabled}
                className={`${styles.toggle} ${manageEnabled ? styles.toggleOn : ""}`}
              >
                <span className={styles.toggleThumb} />
              </span>
            </button>
          </div>
        </div>

        <div className={styles.details}>
          <h1 className={styles.name}>{profileData.name}</h1>
          <p className={styles.bio}>{profileData.bio}</p>
          <div className={styles.stats}>
            <span className={styles.stat}>
              <StarIcon size={16} className={styles.starIcon} />
              {profileData.rating} ({profileData.reviews} Reviews)
            </span>
            <span className={styles.stat}>
              <PeopleIcon size={16} />
              {profileData.followers} Followers
            </span>
            <span className={styles.deliveryTag}>
              <BoltIcon size={16} />
              {profileData.delivery} Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
