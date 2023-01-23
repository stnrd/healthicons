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
        d="M11 18a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2H11Zm4 8h18v-2H15v2Zm18 5H15v-2h18v2Zm-18 5h18v-2H15v2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 18v-2a6 6 0 0 0-12 0v2h12ZM24 6c-5.523 0-10 4.477-10 10v6h20v-6c0-5.523-4.477-10-10-10Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgUiSecure;
