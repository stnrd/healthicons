import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPavedRoadAlt = (passedProps: SvgProps) => {
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
        d="M15 6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H15Zm8 5a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0v-4Zm0 11a1 1 0 1 1 2 0v4a1 1 0 0 1-2 0v-4Zm1 10a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgPavedRoadAlt;
