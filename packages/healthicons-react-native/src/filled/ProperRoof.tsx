import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgProperRoof = (passedProps: SvgProps) => {
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
        d="M25.381 6.573a1.95 1.95 0 0 0-2.762 0L7.336 21.931c-.482.484-.463 1.162.171 1.42.571.23 1.456.502 2.818.756L22 10l-8.453 14.558c1.74.181 3.904.324 6.594.394L24 10v15c10.634 0 14.856-.986 16.493-1.65.634-.257.653-.935.171-1.42L25.381 6.574ZM12 26.22c2.63.365 6.454.643 12 .643s9.37-.278 12-.644v14.347C36 42 28 42 28 42v-6c0-1.912-1.692-4-4-4s-4 2.088-4 4v6s-8 0-8-1.434V26.219Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgProperRoof;
