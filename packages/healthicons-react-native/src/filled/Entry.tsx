import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEntry = (passedProps: SvgProps) => {
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
        d="M21 5.387a1 1 0 0 1 1.316-.948l13 4.333a1 1 0 0 1 .684.949v28.558a1 1 0 0 1-.684.949l-13 4.333A1 1 0 0 1 21 42.613V39h-9V8h9V5.387ZM27 23c0 1.105-.448 2-1 2s-1-.895-1-2 .448-2 1-2 1 .895 1 2Zm-6-13h-7v27h7V10Z"
      />
    </Svg>
  );
};
export default SvgEntry;
