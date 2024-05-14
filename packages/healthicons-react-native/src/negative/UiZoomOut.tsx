import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiZoomOut = (passedProps: SvgProps) => {
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
        clipPath="url(#ui-zoom-out_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <Path d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13Zm-7 1H21v-2h12v2Z" />
        <Path d="M0 0h48v48H0V0Zm12.927 32.245 1.705-.12 1.158-1.158A14.944 14.944 0 0 1 12 21c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15a14.942 14.942 0 0 1-9.784-3.63l-1.346 1.346-.158 1.4L8.828 42 6 39.172l6.927-6.927Z" />
      </G>
      <Defs>
        <ClipPath id="ui-zoom-out_svg__a">
          <Path d="M0 0h48v48H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default SvgUiZoomOut;
