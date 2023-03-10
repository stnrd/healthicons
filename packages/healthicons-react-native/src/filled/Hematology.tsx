import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHematology = (passedProps: SvgProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm15.018 28.993c4.48-.003 7.997-3.463 7.994-7.863C32.008 23.044 24 12.993 24 12.993s-7.992 9.75-7.988 14.15c.003 4.4 3.526 7.854 8.006 7.85Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgHematology;
