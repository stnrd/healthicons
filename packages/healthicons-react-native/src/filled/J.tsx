import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgJ = (passedProps: SvgProps) => {
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
        d="M30 10a2 2 0 0 1 2 2v18a8 8 0 1 1-16 0 2 2 0 1 1 4 0 4 4 0 1 0 8 0V12a2 2 0 0 1 2-2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgJ;
