import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeSuit = (passedProps: SvgProps) => {
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
        d="M25 13a3 3 0 0 0 3-3V7h-8v3a3 3 0 0 0 3 3h2Zm-2-2a1 1 0 0 1-1-1V9h4v1a1 1 0 0 1-1 1h-2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 9a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v5.1c2.282.463 4 2.481 4 4.9v12a3 3 0 0 1-4 2.83V40a4 4 0 0 1-7 2.646A4 4 0 0 1 17 40v-6.17A3 3 0 0 1 13 31V19a5.002 5.002 0 0 1 4-4.9V9Zm13 7a3 3 0 0 1 3 3v9h-2v-9h-2v5h-4v-8h5Zm2 16a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1Zm-5 10a2 2 0 0 1-2-2V30h4v10a2 2 0 0 1-2 2Zm-9-26a3 3 0 0 0-3 3v9h2v-9h2v5h4v-8h-5Zm3 26a2 2 0 0 0 2-2V30h-4v10a2 2 0 0 0 2 2Zm-5-10a1 1 0 0 0 1-1v-1h-2v1a1 1 0 0 0 1 1ZM26 6a3 3 0 0 1 3 3v5H19V9a3 3 0 0 1 3-3h4Zm3 20v2h-4v-2h4Zm-10 0v2h4v-2h-4Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPpeSuit;
