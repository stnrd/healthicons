import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoadAlt = (passedProps: SvgProps) => {
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
      <Path d="M33 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0V7ZM13 7a1 1 0 0 1 2 0v34a1 1 0 1 1-2 0V7ZM23 11a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM23 22a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4ZM23 33a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4Z" />
    </Svg>
  );
};
export default SvgPavedRoadAlt;
