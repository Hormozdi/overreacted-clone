import type { FC } from "react";

import Toggle from "react-toggle";
import "react-toggle/style.css";

import moonImg from "../public/assets/images/moon.png";
import sunImg from "../public/assets/images/sun.png";

type Props = {};

const ToggleThemeColor: FC<Props> = ({}) => {
  return (
    <div>
      <Toggle
        id="cheese-status"
        // defaultChecked={this.state.cheeseIsReady}
        // onChange={this.handleCheeseChange}
        icons={{
          checked: <img src={moonImg.src} />,
          unchecked: <img src={sunImg.src} />,
        }}
      />
    </div>
  );
};

export default ToggleThemeColor;
