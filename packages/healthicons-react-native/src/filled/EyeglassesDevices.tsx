import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEyeglassesDevices = (passedProps: SvgProps) => {
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
        d="M14 36a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM34 36a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.973 30c-.736.001-1.508.184-2.605.619a1 1 0 0 1-.736-1.86c1.207-.478 2.245-.757 3.338-.759 1.09-.002 2.146.273 3.392.756a1 1 0 1 1-.724 1.865c-1.137-.44-1.928-.622-2.665-.621ZM8.006 10.524A1 1 0 0 1 9 9.629h4a1 1 0 0 1 0 2H9.9L7.995 29.733a1 1 0 1 1-1.99-.21l2-19ZM39.998 10.524a1 1 0 0 0-.994-.895h-4a1 1 0 0 0 0 2h3.1l1.905 18.104a1 1 0 1 0 1.99-.21l-2-19Z"
      />
    </Svg>
  );
};
export default SvgEyeglassesDevices;
