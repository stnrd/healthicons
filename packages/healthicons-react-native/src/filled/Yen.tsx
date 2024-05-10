import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgYen = (passedProps: SvgProps) => {
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
        d="M35.28 10.464a2 2 0 0 1 .256 2.816L28.27 22H30a2 2 0 1 1 0 4h-4v2h4a2 2 0 1 1 0 4h-4v4a2 2 0 0 1-4 0v-4h-4a2 2 0 0 1 0-4h4v-2h-4a2 2 0 0 1 0-4h1.73l-7.266-8.72a2 2 0 1 1 3.072-2.56L24 20.876l8.464-10.156a2 2 0 0 1 2.816-.256Z"
      />
    </Svg>
  );
};
export default SvgYen;
