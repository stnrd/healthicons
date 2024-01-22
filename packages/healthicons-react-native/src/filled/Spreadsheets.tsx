import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpreadsheets = (passedProps: SvgProps) => {
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
        d="M16 20v3h16v-3H16ZM16 28v-3h4v3h-4ZM16 30v3h4v-3h-4ZM22 30v3h4v-3h-4ZM28 30v3h4v-3h-4ZM28 28v-3h4v3h-4ZM26 28h-4v-3h4v3Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1V4ZM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V19Z"
        fill="#000"
      />
      <Path d="M37.414 10H32V4.586L37.414 10Z" fill="#000" />
    </Svg>
  );
};
export default SvgSpreadsheets;
