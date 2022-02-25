import type { FC } from "react";

import Toggle from "react-toggle";
import "react-toggle/style.css";

import moonImg from "../public/assets/images/moon.png";
import sunImg from "../public/assets/images/sun.png";

type Props = {
  status: Boolean;
  handleChange: Function;
};

const ToggleThemeColor: FC<Props> = ({ status, handleChange }) => {
  return (
    <div>
      {status.toString()}-
      {typeof status}
      <Toggle
        id="cheese-status"
        defaultChecked={!!status}
        onChange={handleChange}
        icons={{
          checked: <img src={moonImg.src} />,
          unchecked: <img src={sunImg.src} />,
        }}
      />
    </div>
  );
};

export default ToggleThemeColor;
