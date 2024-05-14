import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusAlt = (passedProps: SvgProps) => {
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
      fill="currentColor"
      color="currentColor"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4 6.9a1 1 0 0 1 1-1h7.2a1 1 0 1 1 0 2H25v2.636c2.976.218 5.684 1.4 7.813 3.237l1.923-1.923-1.543-1.543a1 1 0 0 1 1.414-1.414l4.5 4.5a1 1 0 0 1-1.414 1.414l-1.543-1.543-1.923 1.923A13.442 13.442 0 0 1 37.463 23H40.1v-2.6a1 1 0 1 1 2 0v7.2a1 1 0 1 1-2 0V25h-2.637a13.442 13.442 0 0 1-3.236 7.813l1.923 1.923 1.543-1.543a1 1 0 0 1 1.414 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414l1.543-1.543-1.923-1.923A13.442 13.442 0 0 1 25 37.463V40.1h2.6a1 1 0 1 1 0 2h-7.2a1 1 0 1 1 0-2H23v-2.637a13.442 13.442 0 0 1-7.813-3.236l-1.923 1.923 1.543 1.543a1 1 0 0 1-1.414 1.414l-4.5-4.5a1 1 0 1 1 1.414-1.414l1.543 1.543 1.923-1.923A13.442 13.442 0 0 1 10.536 25H7.9v2.6a1 1 0 1 1-2 0v-7.2a1 1 0 1 1 2 0V23h2.636a13.442 13.442 0 0 1 3.237-7.813l-1.923-1.923-1.543 1.543a1 1 0 0 1-1.414-1.414l4.5-4.5a1 1 0 1 1 1.414 1.414l-1.543 1.543 1.923 1.923A13.442 13.442 0 0 1 23 10.536V7.9h-2.6a1 1 0 0 1-1-1Zm11.35 18a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Zm-4.95 5.85a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0Zm-5.4-7.65a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z"
      />
    </Svg>
  );
};
export default SvgVirusAlt;
