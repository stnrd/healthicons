import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMobileClinic = (passedProps: SvgProps) => {
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
        d="M7 10a3 3 0 0 0-3 3v22h3.126a4.002 4.002 0 0 0 7.748 0h1.252a4.002 4.002 0 0 0 7.748 0h9.252a4.002 4.002 0 0 0 7.748 0H44v-8.124a3 3 0 0 0-.965-2.205l-5.282-4.875A3 3 0 0 0 35.718 19H32v-6a3 3 0 0 0-3-3H7Zm33.874 23H42v-5H32v5h1.126a4.002 4.002 0 0 1 7.748 0ZM32 26h9.526l-5.13-4.735a1 1 0 0 0-.678-.265H32v5ZM6 33v-5h24v5h-6.126a4.002 4.002 0 0 0-7.748 0h-1.252a4.002 4.002 0 0 0-7.748 0H6Zm3 1a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm11 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm19-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgMobileClinic;
