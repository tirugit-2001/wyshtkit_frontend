import { Outlet } from "react-router-dom";

import Header from "../../components/layout/header/Header";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import styles from "./parent.module.scss";

const Parent = () => {
  return (
    <div className={styles.parent}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Parent;
