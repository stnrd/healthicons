import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgF = (passedProps: SvgProps) => {
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
        d="M15 12a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6h-9v6h9a3 3 0 1 1 0 6h-9v9a3 3 0 1 1-6 0V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 1 0 2 0V26a1 1 0 0 1 1-1h10a1 1 0 1 0 0-2H20a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 1 0 0-2H18Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgF;
