import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineBaby0306M = (
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
        d="M29.678 25.772a3.92 3.92 0 0 0-1.951-.509h-3.174A1479.279 1479.279 0 0 1 24.986 34h2.427c1.358-.002 2.437-.703 3.526-1.859l.715-.76.729.748c.227.233.427.516.588.75l.134.197c.119.175.224.33.339.482.292.387.425.437.43.442h4.986c.543 0 1.14-.592 1.14-1.315 0-.722-.594-1.316-1.26-1.316h-3.07l-.188-.08c-1.443-.612-2.442-1.876-3.264-2.924l-.068-.087c-.856-1.094-1.559-1.991-2.472-2.506Zm.983-1.742a5.921 5.921 0 0 0-2.943-.767h-5.271l.054 1.052c.262 5.029.393 7.71.459 9.134a160.008 160.008 0 0 1 .063 1.53l.001.027V36h4.392c1.697-.003 3.03-.719 4.126-1.666.097.141.201.29.306.43.337.446.994 1.236 2.011 1.236h5C40.73 36 42 34.277 42 32.685c0-1.754-1.418-3.316-3.26-3.316h-2.648c-.814-.408-1.483-1.195-2.299-2.237l-.154-.197c-.776-.994-1.706-2.187-2.978-2.905ZM13.25 31H9.5a1.5 1.5 0 0 0 0 3H14a1.5 1.5 0 0 0 1.2-.6l3-4a1.5 1.5 0 0 0-2.4-1.8L13.25 31Zm-1-2H9.5a3.5 3.5 0 1 0 0 7H14a3.5 3.5 0 0 0 2.8-1.4l3-4a3.5 3.5 0 1 0-5.6-4.2L12.25 29Zm23.25-8a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineBaby0306M);
export default ForwardRef;
