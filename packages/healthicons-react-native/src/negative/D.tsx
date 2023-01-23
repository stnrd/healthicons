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
        d="M16 34V14h6c5.523 0 10 4.477 10 10s-4.477 10-10 10h-6Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM14 10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8c7.732 0 14-6.268 14-14s-6.268-14-14-14h-8Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgD;
