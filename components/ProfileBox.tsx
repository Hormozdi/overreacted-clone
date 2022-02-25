import type { FC } from "react";

import styles from "./styles/ProfileBox.module.scss";

import profilePic from "../public/assets/images/profile-pic.jpg";

type Props = {};

const ProfileBox: FC<Props> = ({}) => {
  return (
    <div className={styles.profile}>
      <img className={styles.profilePic} src={profilePic.src} />
      <span>
        <p>
          Personal blog by{" "}
          <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a>.
        </p>
        <p>I explain with words and code.</p>
      </span>
    </div>
  );
};

export default ProfileBox;
