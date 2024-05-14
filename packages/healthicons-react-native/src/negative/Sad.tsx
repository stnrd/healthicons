import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSad = (passedProps: SvgProps) => {
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
      <G
        clipPath="url(#sad_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <Path d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm0-15c4.038 0 7.538 2.438 9.258 6 .469.97-.316 2-1.394 2H16.136c-1.078 0-1.863-1.03-1.394-2 1.72-3.562 5.22-6 9.258-6Zm-9.304-2.762c-.684-.438-1.184-1.145-1.065-1.883a.5.5 0 0 1 .668-.39c1.818.676 3.846.257 5.642-1.448a.5.5 0 0 1 .818.204c.232.688.024 1.618-.48 2.381a3.794 3.794 0 0 1-2.654 1.666c-1.198.177-2.216-.073-2.93-.53Zm17.947 0c.682-.438 1.183-1.145 1.064-1.883a.5.5 0 0 0-.668-.39c-1.818.676-3.846.257-5.642-1.448a.5.5 0 0 0-.818.204c-.232.688-.024 1.618.48 2.381a3.794 3.794 0 0 0 2.654 1.666c1.198.177 2.216-.073 2.93-.53Z" />
        <Path d="M0 0h48v48H0V0Zm24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z" />
      </G>
      <Defs>
        <ClipPath id="sad_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgSad;
