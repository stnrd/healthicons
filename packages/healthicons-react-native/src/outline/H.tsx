import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgH = (passedProps: SvgProps) => {
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
        d="M13 12a3 3 0 1 1 6 0v9h10v-9a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0v-9H19v9a3 3 0 1 1-6 0V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V25h14v11a1 1 0 1 0 2 0V12a1 1 0 1 0-2 0v11H17V12a1 1 0 0 0-1-1Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgH;
