import { NavLink } from "react-router-dom";

import WyshkitLogo from "../../shared/logo/WyshkitLogo";
import {
  ClipsIcon,
  FeedIcon,
  HomeIcon,
  InboxIcon,
  PlusIcon,
  ProfileIcon,
} from "../../shared/icons/Icons";
import styles from "./sidebar.module.scss";

const navItems = [
  { to: "/", label: "Home", icon: HomeIcon, end: true },
  { to: "/feed", label: "Feed", icon: FeedIcon },
  { to: "/clips", label: "Clips", icon: ClipsIcon },
];

const bottomItems = [
  { to: "/inbox", label: "Inbox", icon: InboxIcon },
  { to: "/profile", label: "Profile", icon: ProfileIcon },
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <WyshkitLogo />
        <span className={styles.logoText}>Wyshkit</span>
      </div>

      <nav className={styles.nav}>
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>

      <button type="button" className={styles.createBtn}>
        <PlusIcon size={18} />
        Create
      </button>

      <nav className={`${styles.nav} ${styles.bottomNav}`}>
        {bottomItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
