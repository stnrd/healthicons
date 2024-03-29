import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMagnifyingGlass = (passedProps: SvgProps) => {
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
      <G clipPath="url(#magnifying_glass_svg__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM29 19c0 5.523-4.477 10-10 10S9 24.523 9 19 13.477 9 19 9s10 4.477 10 10Zm-1.616 9.936A12.948 12.948 0 0 1 19 32c-7.18 0-13-5.82-13-13S11.82 6 19 6s13 5.82 13 13c0 3.195-1.152 6.12-3.064 8.384L31.144 27l7.514 7.514-4.144 4.144L27 31.144l.384-2.208Zm-8.636-16.12c-1.74.067-3.313.688-4.154 1.53a1 1 0 0 1-1.414-1.415c1.297-1.297 3.409-2.033 5.49-2.114 2.095-.081 4.382.492 5.984 2.094a1 1 0 1 1-1.415 1.414c-1.09-1.09-2.764-1.577-4.491-1.51Zm17.18 27.256 4.144-4.144 1.356 1.356c.763.763.763 2 0 2.762l-1.382 1.382c-.763.763-2 .763-2.762 0l-1.356-1.356Z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="magnifying_glass_svg__a">
          <Path fill="#fff" d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgMagnifyingGlass;
