import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsRoundX1 = (passedProps: SvgProps) => {
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
      <Path d="M19 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM27 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM30 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM24 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V8Zm20-2a2 2 0 0 1 2 2v15a1 1 0 1 0 0 2v15a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V25a1 1 0 1 0 0-2V8a2 2 0 0 1 2-2h16Z"
      />
    </Svg>
  );
};
export default SvgBlisterPillsRoundX1;
