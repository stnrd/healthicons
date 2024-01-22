import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsOvalX4 = (passedProps: SvgProps) => {
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
        d="M22.071 11.414a2 2 0 0 0-2.828 0l-2.829 2.829a2 2 0 0 0 2.829 2.828l2.828-2.828a2 2 0 0 0 0-2.829ZM28.243 11.414a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828l2.829-2.829ZM22.071 30.414a2 2 0 0 0-2.828 0l-2.829 2.829a2 2 0 0 0 2.829 2.828l2.828-2.828a2 2 0 0 0 0-2.829ZM28.243 30.414a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828l2.829-2.829ZM19 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM22 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM27 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM30 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V8Zm2 0a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v15a1 1 0 1 0 0 2v15a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V25a1 1 0 1 0 0-2V8Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgBlisterPillsOvalX4;
