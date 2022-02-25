import type { FC, ChangeEvent } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import ToggleThemeColor from "../../components/ToggleThemeColor";
import { toggleDarkMode } from "../../store/theme/actionCreators";

import styles from "./MainHeader.module.scss";

type Props = {
  isLight: Boolean;
  toggleDarkMode: Function;
};

const MainHeader: FC<Props> = ({ isLight, toggleDarkMode }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Overreacted</h1>
      <ToggleThemeColor status={isLight} handleChange={toggleDarkMode} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLight: state.theme.isLight,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleDarkMode: (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(toggleDarkMode(e.target.checked)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
