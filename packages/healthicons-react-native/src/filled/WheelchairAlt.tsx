import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWheelchairAlt = (passedProps: SvgProps) => {
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
      <Path d="M16 33a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6h4.78l2.75 11H26a3 3 0 0 1 3 3v3h1a3 3 0 0 1 3 3v1.414l6.071 6.071 2.122-2.121 1.414 1.414-3.536 3.536L33 30.242v5.929a3.001 3.001 0 1 1-2 0V29h-5.458c.298.947.458 1.955.458 3 0 5.523-4.477 10-10 10S6 37.523 6 32c0-5.096 3.811-9.301 8.739-9.921L11.219 8H8V6Zm19 17v-3a1 1 0 0 0-1-1h-9.97l.758 3.03a9.94 9.94 0 0 1 3.576.97H27Zm-15 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm20 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      />
    </Svg>
  );
};
export default SvgWheelchairAlt;
