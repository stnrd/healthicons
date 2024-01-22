import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSample = (passedProps: SvgProps) => {
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
        d="M0 0h48v48H0V0Zm18.142 4L4 18.142l7.778 7.778 1.403-1.403 16.36 16.36a8 8 0 1 0 11.314-11.313l-16.36-16.36 1.425-1.426L18.142 4Zm18.47 24.15-9.192-9.193-4.95 4.95 9.193 9.192 4.95-4.95ZM26.007 17.543l-2.828-2.829-8.486 8.486 9.346 9.345c.523-.715 1.337-1.51 2.152-2.09l-6.548-6.548 6.364-6.364Zm-7.778-.707-4.95-4.95-1.414 1.414 4.95 4.95 1.414-1.414ZM16.814 8.35l-1.415 1.415 4.95 4.95 1.414-1.415-4.95-4.95Zm-7.072 7.072-1.414 1.414 4.95 4.95 1.414-1.415-4.95-4.95Z"
        fill="#000"
      />
    </Svg>
  );
};
export default SvgMedicalSample;
