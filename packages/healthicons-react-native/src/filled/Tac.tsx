import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTac = (passedProps: SvgProps) => {
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
      <Path d="M24 25a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#333" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 23c0 3.942 1.342 7.571 3.594 10.455L9.33 36.444C8.217 39.08 10.153 42 13.016 42h21.968c2.863 0 4.799-2.92 3.685-5.556l-1.263-2.99A16.927 16.927 0 0 0 41 23c0-9.389-7.611-17-17-17S7 13.611 7 23Zm22 9 1.6 8h4.384a2 2 0 0 0 1.843-2.778L32.1 26.032a2 2 0 0 0-1.843-1.222h-1.621a5.988 5.988 0 0 0 1.086-2h.535c.804 0 1.57.24 2.212.667a8.526 8.526 0 1 0-16.843-.061 3.995 3.995 0 0 1 2.117-.606h.535a5.988 5.988 0 0 0 1.086 2h-1.621a2 2 0 0 0-1.842 1.221l-4.727 11.19A2 2 0 0 0 13.016 40H17.4l1.6-8h-.585l-1.992 5.974a1.5 1.5 0 1 1-2.846-.948l2.544-7.633A3.5 3.5 0 0 1 19.441 27h9.117a3.5 3.5 0 0 1 3.32 2.393l2.545 7.633a1.5 1.5 0 1 1-2.846.948L29.585 32H29Zm-9.184-20.33a11.263 11.263 0 0 1 8.62.06l.778-1.842a13.264 13.264 0 0 0-10.15-.072l.752 1.853Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgTac;
