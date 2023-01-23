import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSexualReproductiveHealth = (passedProps: SvgProps) => {
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
        d="M17.546 15.48a7 7 0 1 0 4.372 5.454 1 1 0 0 1 1.977-.304 9 9 0 1 1-5.622-7.014 1 1 0 1 1-.727 1.863Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM28.902 15.263a7 7 0 0 0-8.853 7.562 1 1 0 1 1-1.986.236 9 9 0 1 1 5.375 7.204 1 1 0 1 1 .791-1.837 7.001 7.001 0 1 0 4.673-13.165Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974-3.974.05a1 1 0 0 1-.026-2l6.026-.076-.076 6.025a1 1 0 0 1-1.013.988Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgSexualReproductiveHealth;
