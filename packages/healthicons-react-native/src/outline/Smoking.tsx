import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSmoking = (passedProps: SvgProps) => {
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
        d="M37 11a1 1 0 0 1 1-1 5 5 0 0 1 5 5v1.59a4.4 4.4 0 0 1-1.644 3.436A5.994 5.994 0 0 1 44 25v3a1 1 0 1 1-2 0v-3a4 4 0 0 0-4-4 1 1 0 1 1 0-2h.59A2.41 2.41 0 0 0 41 16.59V15a3 3 0 0 0-3-3 1 1 0 0 1-1-1Zm-3 6a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5 1 1 0 1 1 0 2ZM7 30a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H7Zm-1 3a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2Zm34-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm4 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgSmoking;
