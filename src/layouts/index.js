import React from "react";
import { Outlet } from "react-router-dom";
import Header from "components/header";
import styles from "./styles.module.css";
const Layout = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
