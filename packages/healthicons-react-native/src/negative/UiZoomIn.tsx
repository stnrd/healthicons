import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiZoomIn = (passedProps: SvgProps) => {
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
        d="M40 21c0 7.18-5.82 13-13 13s-13-5.82-13-13S19.82 8 27 8s13 5.82 13 13Zm-18 1h4v4h2v-4h4v-2h-4v-4h-2v4h-4v2Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM12.927 32.245l1.705-.12 1.158-1.158A14.944 14.944 0 0 1 12 21c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15a14.942 14.942 0 0 1-9.784-3.63l-1.346 1.346-.158 1.4L8.828 42 6 39.17l6.927-6.926Z"
        fill="#333"
      />
    </Svg>
  );
};
export default SvgUiZoomIn;
