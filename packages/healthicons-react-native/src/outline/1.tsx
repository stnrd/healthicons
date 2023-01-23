import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg1 = (passedProps: SvgProps) => {
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
        d="M24.879 9.879A3 3 0 0 1 30 12v24a3 3 0 0 1-6 0V19.236a3 3 0 0 1-4.121-4.357l5-5Zm2.504 1.197a1 1 0 0 0-1.09.217l-5 5a1 1 0 0 0 1.414 1.414l1.586-1.586a1 1 0 0 1 1.707.707V36a1 1 0 1 0 2 0V12a1 1 0 0 0-.617-.924Z"
        fill="#333"
      />
    </Svg>
  );
};
export default Svg1;
