import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCholera = (passedProps: SvgProps) => {
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
        d="M31.938 13A8.001 8.001 0 0 0 24 6H10V4h14c5.185 0 9.449 3.947 9.95 9H36v6H24v-6h2a1 1 0 0 0-1-1H10v-2h15a3 3 0 0 1 3 3h3.938ZM26 17v-2h8v2h-8Z"
        fill="#000"
      />
      <Path
        d="M27.03 33.517a1 1 0 0 1-1.012-.988A2.5 2.5 0 0 1 28.488 30a1 1 0 0 1 .024 2 .5.5 0 0 0-.494.506 1 1 0 0 1-.988 1.011ZM32 31a1 1 0 1 0 0 2 .5.5 0 0 1 .5.5 1 1 0 1 0 2 0A2.5 2.5 0 0 0 32 31ZM29.763 38.25a1 1 0 0 1-.762 1.192 2.5 2.5 0 0 1-2.978-1.906 1 1 0 0 1 1.954-.429.5.5 0 0 0 .595.381 1 1 0 0 1 1.191.763ZM33 39a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM31 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM30 36a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 35.636C38 40.256 34.418 44 30 44s-8-3.745-8-8.364C22 28.318 30 21 30 21s8 7.318 8 14.636Zm-2 0c0 3.6-2.77 6.364-6 6.364s-6-2.764-6-6.364c0-3.004 1.681-6.229 3.616-8.884A33.405 33.405 0 0 1 30 23.85c.68.74 1.533 1.734 2.384 2.9C34.319 29.408 36 32.633 36 35.637Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgCholera;
