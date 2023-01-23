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
        d="M24 6H10V4h14c5.523 0 10 4.477 10 10v1h-8v-2a1 1 0 0 0-1-1H10v-2h15a3 3 0 0 1 3 3h3.938A8.001 8.001 0 0 0 24 6Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 13h12v6H24v-6Zm2 2v2h8v-2h-8ZM30 42c3.23 0 6-2.764 6-6.364 0-3.004-1.681-6.229-3.616-8.884A33.405 33.405 0 0 0 30 23.85c-.68.74-1.533 1.734-2.384 2.9C25.681 29.408 24 32.633 24 35.637c0 3.6 2.77 6.364 6 6.364Zm0 2c4.418 0 8-3.745 8-8.364C38 28.318 30 21 30 21s-8 7.318-8 14.636C22 40.256 25.582 44 30 44Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.03 33.517a1 1 0 0 1-1.012-.988A2.5 2.5 0 0 1 28.488 30a1 1 0 0 1 .024 2 .5.5 0 0 0-.494.506 1 1 0 0 1-.988 1.011ZM31 32a1 1 0 0 1 1-1 2.5 2.5 0 0 1 2.5 2.5 1 1 0 1 1-2 0 .5.5 0 0 0-.5-.5 1 1 0 0 1-1-1ZM29.763 38.25a1 1 0 0 1-.762 1.192 2.5 2.5 0 0 1-2.978-1.906 1 1 0 0 1 1.954-.429.5.5 0 0 0 .595.381 1 1 0 0 1 1.191.763Z"
        fill="#333"
      />
      <Path
        d="M34 38a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM31 28a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM31 35a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgCholera;
