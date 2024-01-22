import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgInteroperability = (passedProps: SvgProps) => {
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
        d="M28 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM42 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.936 22.351a1 1 0 0 1-1.287.586l-8-3a1 1 0 0 1 .702-1.873l8 3a1 1 0 0 1 .585 1.287Z"
        fill="#000"
      />
      <Path d="M24 10.902a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.902 17.5a1 1 0 0 1-1-1V7.902a1 1 0 1 1 2 0V16.5a1 1 0 0 1-1 1ZM39.928 18.629a1 1 0 0 1-.557 1.3l-7.5 3a1 1 0 0 1-.742-1.857l7.5-3a1 1 0 0 1 1.3.557Z"
        fill="#000"
      />
      <Path d="M17 38a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.118 29.714a1 1 0 0 1 .168 1.404l-5.5 7a1 1 0 0 1-1.572-1.236l5.5-7a1 1 0 0 1 1.404-.168Z"
        fill="#000"
      />
      <Path d="M31.5 38a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" fill="#000" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.382 29.714a1 1 0 0 0-.168 1.404l5.5 7a1 1 0 0 0 1.572-1.236l-5.5-7a1 1 0 0 0-1.404-.168Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgInteroperability;
