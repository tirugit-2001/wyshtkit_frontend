import type { ProfileTab } from "@/pages/profile/data";
import { profileTabs } from "@/pages/profile/data";
import styles from "./ProfileTabs.module.scss";

type ProfileTabsProps = {
  activeTab: ProfileTab;
  onTabChange: (tab: ProfileTab) => void;
};

const ProfileTabs = ({ activeTab, onTabChange }: ProfileTabsProps) => {
  return (
    <nav className={styles.tabs} aria-label="Profile sections">
      {profileTabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
          onClick={() => onTabChange(tab)}
          aria-selected={activeTab === tab}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default ProfileTabs;
