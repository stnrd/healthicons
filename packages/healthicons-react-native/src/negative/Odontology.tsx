import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOdontology = (passedProps: SvgProps) => {
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
        d="M33 22a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM21.166 9.4c-4.422-2.596-8.336-1.473-11.58 2.466-3.083 3.742-.982 10.488.53 15.338.36 1.156.686 2.205.9 3.079 1.116 4.54 2.184 7.37 4.617 9.418 1.205 1.014 2.572-.729 4.014-2.567 1.25-1.594 2.556-3.26 3.863-3.264 1.285-.004 2.571 1.66 3.804 3.254 1.423 1.84 2.775 3.59 3.973 2.577 1.86-1.57 2.703-2.722 3.725-5.956a8 8 0 1 1 4.342-12.607c1.006-3.42 1.126-6.903-1.773-10.265-4.128-4.786-9.844-2.335-12.524-.747l3.598 3.118a1 1 0 1 1-1.31 1.512L21.165 9.4ZM33 32a6 6 0 0 0 5.508-8.384A6.001 6.001 0 0 0 27 26a6 6 0 0 0 6 6Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgOdontology;
