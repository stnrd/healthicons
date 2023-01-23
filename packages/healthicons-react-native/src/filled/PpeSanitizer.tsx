import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeSanitizer = (passedProps: SvgProps) => {
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
        d="M12.368 10.996c.292-.51.856-1.3 1.56-1.948C14.654 8.379 15.376 8 16 8h7v6h-4a2 2 0 0 0-2 2v3h-1a5 5 0 0 0-5 5v16a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V24a5 5 0 0 0-5-5h-1v-3a2 2 0 0 0-2-2h-4V8h8V6H16c-1.376 0-2.57.787-3.428 1.577-.88.81-1.565 1.77-1.94 2.427l1.736.992ZM18 29h5v-5h2v5h5v2h-5v5h-2v-5h-5v-2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgPpeSanitizer;
