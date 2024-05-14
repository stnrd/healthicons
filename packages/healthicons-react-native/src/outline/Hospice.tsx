import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospice = (passedProps: SvgProps) => {
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
        d="M41.708 23.794 24.058 6.086 6.294 23.792a1 1 0 1 0 1.412 1.416L10 22.922V41a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V22.907l2.292 2.3a1 1 0 1 0 1.416-1.413ZM24.053 8.914 36 20.9V40H12V20.928L24.053 8.914Z"
      />
      <Path d="M16 25.517C16 22.655 17.794 20 20.25 20c1.704 0 2.97 1.191 3.75 2.88.78-1.689 2.045-2.88 3.75-2.88 2.456 0 4.25 2.655 4.25 5.517C32 31.645 24 36 24 36s-5.389-2.756-7.32-7.278a8.863 8.863 0 0 1-.36-1 7.851 7.851 0 0 1-.32-2.205Z" />
    </Svg>
  );
};
export default SvgHospice;
