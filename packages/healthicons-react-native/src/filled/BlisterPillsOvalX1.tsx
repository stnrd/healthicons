import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsOvalX1 = (passedProps: SvgProps) => {
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
        d="M16 4a4 4 0 0 0-4 4v15a1 1 0 1 1 0 2v15a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V25a1 1 0 1 1 0-2V8a4 4 0 0 0-4-4H16Zm0 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9.757-12.586a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828l2.829-2.829Z"
      />
    </Svg>
  );
};
export default SvgBlisterPillsOvalX1;
