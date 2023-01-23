import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiSecure = (passedProps: SvgProps) => {
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
        d="M15 17a9 9 0 1 1 18 0v1h2v-1c0-6.075-4.925-11-11-11s-11 4.925-11 11v1h2v-1Zm16 1v-1a7 7 0 1 0-14 0v1h2v-1a5 5 0 0 1 10 0v1h2ZM17 20h20v20H11V20h4v-2h-4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2H17v2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 26H15v-2h18v2ZM33 31H15v-2h18v2ZM33 36H15v-2h18v2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgUiSecure;
