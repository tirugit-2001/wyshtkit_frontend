import { NavLink } from "react-router-dom";

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
        <img
          alt="Wyshkit Logo"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM3JB0meUvqdq5xjFYlxr7CjSKJMW_f0QoFmCjgOgO57EOp56Cr8TCCE5ZZmJWV2fbGDzx2Vj7hNx_fEMV5jyUkmuCKc18x1wfdYNaXorV6yfNeAfxyK19yw1tv0FbJULvXeym4f54bXBsgbhfXO_MRoGmM_EQj7X90y286_NpZNo43VVtstzlSp46xLfhPG8HodwpZkK7Qf62Fo5t_qf83cHHTbMkk68HGGBou5kmzLMxSqsg5iL0gdRMWvpO--wmoWMiQv4n5ls6"
          style={{ width: "160px", height: "40px", objectFit: "contain" }}
        />
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
