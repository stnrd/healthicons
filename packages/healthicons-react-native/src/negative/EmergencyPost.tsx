import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEmergencyPost = (passedProps: SvgProps) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="none"
      color="currentColor"
      {...props}
    >
      <Path
        d="M19.758 31.97a1 1 0 0 1-.728-1.212L19.72 28H17a1 1 0 1 1 0-2h3.22l.81-3.242a1 1 0 1 1 1.94.485L22.28 26H25a1 1 0 1 1 0 2h-3.22l-.81 3.243a1 1 0 0 1-1.212.727Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h48v48H0V0Zm43.293 32.952a.995.995 0 0 0 .642-1.303L38 17.962V9h-9v6h7v2H11.938c-1.348 0-2.536.869-2.924 2.138l-4.883 14C3.543 35.063 5.01 37 7.054 37H29.26c1.348 0 2.536-.869 2.923-2.138l4.803-13.733 4.607 10.249L34.5 33.5l-1 2.5 9.794-3.044-.001-.004Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgEmergencyPost;
