import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNetwork4G = (passedProps: SvgProps) => {
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
        d="M21 30a1 1 0 0 0-1.841-.54l-4.5 7A1 1 0 0 0 15.5 38H19v1a1 1 0 1 0 2 0v-1a1 1 0 1 0 0-2v-6Zm-3.668 6L19 33.405V36h-1.668Z"
        fill="#333"
      />
      <Path
        d="M32.674 30.362a1 1 0 1 1-1.333 1.49 3.505 3.505 0 1 0-.334 5.487v-1.875h-2.002a1 1 0 0 1 0-2h3.002a1 1 0 0 1 1 1v3.357a1 1 0 0 1-.333.745 5.503 5.503 0 1 1 0-8.204Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM13 26a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V29a3 3 0 0 0-3-3H13ZM35.087 9.408a12.001 12.001 0 0 0-2.602-3.893L33.9 4.1a14 14 0 0 1 0 19.799l-1.415-1.415a12 12 0 0 0 2.602-13.077Zm-6.844.35a6.001 6.001 0 0 1 0 8.485l1.414 1.414a8 8 0 0 0 0-11.314l-1.414 1.414Zm-8.486 0a6.001 6.001 0 0 0 0 8.485l-1.414 1.414a8 8 0 0 1 0-11.314l1.414 1.414Zm-6.844-.35a12.001 12.001 0 0 1 2.602-3.893L14.1 4.1a14 14 0 0 0 0 19.799l1.415-1.415a12 12 0 0 1-2.602-13.077ZM26 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgNetwork4G;
