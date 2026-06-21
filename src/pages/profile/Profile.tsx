import { useState } from "react";

import {
  CategoryFilters,
  MenuSection,
  ProfileHeader,
  ProfileTabs,
} from "@/components/features/profile";
import type { MenuCategory, ProfileTab } from "./data";
import styles from "./profile.module.scss";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>("Menu");
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Bestsellers");
  const [manageEnabled, setManageEnabled] = useState(true);

  return (
    <div className={styles.profile}>
      <ProfileHeader manageEnabled={manageEnabled} onManageChange={setManageEnabled} />
      <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "Menu" && (
        <div className={styles.menuContent}>
          <CategoryFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <MenuSection category={activeCategory} manageEnabled={manageEnabled} />
        </div>
      )}

      {activeTab === "Reviews" && (
        <p className={styles.placeholder}>Reviews coming soon.</p>
      )}

      {activeTab === "Story" && (
        <p className={styles.placeholder}>Story coming soon.</p>
      )}
    </div>
  );
};

export default Profile;
