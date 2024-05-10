import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgD = (passedProps: SvgProps) => {
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
        d="M12 12a2 2 0 0 1 2-2h8c7.732 0 14 6.268 14 14s-6.268 14-14 14h-8a2 2 0 0 1-2-2V12Zm4 2v20h6c5.523 0 10-4.477 10-10s-4.477-10-10-10h-6Z"
      />
    </Svg>
  );
};
export default SvgD;
