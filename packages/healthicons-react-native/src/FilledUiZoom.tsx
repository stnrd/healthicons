import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledUiZoom = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m18.207 31.379-6.914 6.914-1.414-1.414 6.914-6.915 1.414 1.415Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="m6 39.172 6.927-6.927 2.573-.18.5.5-.288 2.551L8.828 42 6 39.172Z"
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
const ForwardRef = forwardRef(SvgFilledUiZoom);
export default ForwardRef;
