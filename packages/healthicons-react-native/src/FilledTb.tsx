import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledTb = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M23 20.5V6h2v14.5c0 1.398.564 1.942 1.004 2.199.049.028.098.054.148.078l-.004-.377c-.038-3.528-.112-10.4 5.327-10.4 7.45 0 12.773 26.007 9.58 28.66-3.194 2.654-9.58 1.062-12.773-2.123-2.578-2.57-2.355-8.578-2.195-12.891.01-.263.02-.52.028-.769a4.271 4.271 0 0 1-1.119-.45 3.813 3.813 0 0 1-.996-.835c-.297.352-.64.626-.996.834-.4.234-.794.37-1.12.451l.029.769c.16 4.313.383 10.32-2.195 12.891-3.193 3.185-9.58 4.777-12.773 2.123C3.752 38.007 9.075 12 16.525 12c5.439 0 5.365 6.872 5.327 10.4l-.004.377c.05-.024.099-.05.148-.078.44-.257 1.004-.801 1.004-2.199Zm9-1.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm3-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledTb);
export default ForwardRef;
