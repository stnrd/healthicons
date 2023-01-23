import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMinistryOfHealth = (passedProps: SvgProps) => {
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
      <Path d="M25 16v-2h2v-2h-2v-2h-2v2h-2v2h2v2h2Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v10H7a1 1 0 0 0-1 1v3H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v-3a1 1 0 0 0-1-1h-1V23h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.65L24.626 5.22ZM36.149 17 24 7.28 11.85 17h24.3ZM8 19v2h32v-2H8Zm30 4h-2v10h2V23Zm-4 10V23H14v10h1a1 1 0 0 1 1 1v3h4v-8a4 4 0 0 1 8 0v8h4v-3a1 1 0 0 1 1-1h1Zm-12-4v8h4v-8a2 2 0 1 0-4 0Zm20 10v2H6v-2h36Zm-8-4v2h6v-2h-6Zm-24-2V23h2v10h-2Zm-2 2h6v2H8v-2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgMinistryOfHealth;
