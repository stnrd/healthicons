import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNetwork5G = (passedProps: SvgProps) => {
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
        d="M35.087 9.408a12 12 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.799l-1.415-1.415a12 12 0 0 0 2.602-13.077Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.543 11.704a6 6 0 0 0-1.3-1.947l1.414-1.414a8 8 0 0 1 0 11.314l-1.414-1.414a6 6 0 0 0 1.3-6.539ZM19.757 9.757a6 6 0 0 0 0 8.486l-1.414 1.414a8 8 0 0 1 0-11.314l1.414 1.414Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.515 5.515a12 12 0 0 0 0 16.97L14.1 23.9a14 14 0 0 1 0-19.8l1.415 1.415Z"
        fill="#333"
      />
      <Path d="M26 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 27H13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V28a1 1 0 0 0-1-1Zm-22-2a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V28a3 3 0 0 0-3-3H13Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 30a1 1 0 0 0-1-1h-5.25a1 1 0 0 0-.98.804l-.75 3.75a1 1 0 0 0 1.535 1.028c.21-.14 1.143-.582 2.445-.582a2 2 0 1 1 0 4h-.832c-.577 0-1.054-.36-1.227-.84a1 1 0 1 0-1.882.68A3.297 3.297 0 0 0 17.17 40H18a4 4 0 0 0 0-8c-.61 0-1.173.072-1.666.182L16.57 31H21a1 1 0 0 0 1-1ZM32.674 30.362a1 1 0 1 1-1.333 1.49 3.504 3.504 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745 5.504 5.504 0 1 1 0-8.204Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgNetwork5G;
