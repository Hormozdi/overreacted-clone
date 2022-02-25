import type { FC } from "react";

import ToggleThemeColor from "../../components/toggleThemeColor";

import styles from "./MainHeader.module.scss";

type Props = {};

const MainHeader: FC<Props> = ({}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Overreacted</h1>
      <ToggleThemeColor />
    </div>
  );
};

export default MainHeader;
