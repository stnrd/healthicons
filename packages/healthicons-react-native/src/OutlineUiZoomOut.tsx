import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineUiZoomOut = (
  passedProps: SvgProps,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m17.707 31.707-3.5 3.5-1.414-1.414 3.5-3.5 1.414 1.414Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="m4.586 39.172 6.524-6.524 3.118.14 1.067 1.066.005 3.089-6.472 6.471-4.242-4.242Zm2.828 0 1.414 1.414 4.47-4.47-.001-1.368-1.397-.063-4.486 4.487ZM33 22H21v-2h12v2Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        fillRule="evenodd"
        d="M27 34c7.18 0 13-5.82 13-13S34.18 8 27 8s-13 5.82-13 13 5.82 13 13 13Zm0 2c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineUiZoomOut);
export default ForwardRef;
