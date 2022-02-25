import type { FC } from "react";

import MainHeader from "./MainHeader";

import styles from "./Main.module.scss";

type Props = { children?: React.ReactChild | React.ReactChild[] };

const MainTemplate: FC<Props> = ({ children }) => {
  return (
    <div className={styles.main}>
      <MainHeader />
      {children}
    </div>
  );
};

export default MainTemplate;
