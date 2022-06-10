import React from 'react';
import styles from './MainLayout.module.scss'

import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className={ styles.main }>
      <div className={ styles.main__content }>
        <div className={ styles.main__wrapper }>
          <Outlet />
        </div>
      </div>
    
    </div>
  );
};

export default MainLayout;