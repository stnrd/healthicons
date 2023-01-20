import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHeart = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
      ref={ref}
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.345 11.988C8.885 13.846 8 16.384 8 19.035c0 5.94 3.965 10.927 8.15 14.516a43.803 43.803 0 0 0 7.837 5.32l.252-.14a47.168 47.168 0 0 0 7.603-5.371C36.044 29.691 40 24.705 40 19.034c0-2.65-.885-5.189-2.344-7.047C36.2 10.137 34.213 9 31.969 9c-3.103 0-5.51 2.02-7.071 5.202L24 16.03l-.898-1.828C21.541 11.02 19.134 9 16.032 9c-2.245 0-4.232 1.136-5.687 2.988ZM24 40l-.434.9-.005-.002-.011-.005-.041-.02a28.259 28.259 0 0 1-.711-.368 45.822 45.822 0 0 1-7.949-5.436C10.535 31.371 6 25.875 6 19.034c0-3.075 1.021-6.054 2.772-8.282C10.528 8.518 13.056 7 16.032 7c3.503 0 6.167 1.963 7.968 4.734C25.8 8.964 28.465 7 31.969 7c2.975 0 5.504 1.518 7.26 3.753C40.978 12.98 42 15.96 42 19.035c0 6.582-4.544 12.079-8.842 15.831a49.172 49.172 0 0 1-8.494 5.914l-.151.08-.04.022-.012.005-.003.002h-.001S24.456 40.89 24 40Zm0 0 .457.89-.443.227-.448-.216L24 40Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgHeart);
export default ForwardRef;
