import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledMobile = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M12.966 7.005A3 3 0 0 1 15.962 4l15.973-.026a3 3 0 0 1 3.005 2.995l.055 33.987A3 3 0 0 1 32 43.96l-15.972.026a3 3 0 0 1-3.005-2.995l-.056-33.987Zm2 .997a2 2 0 0 1 1.996-2.004l13.977-.022a2 2 0 0 1 2.004 1.996l.044 26.99a2 2 0 0 1-1.997 2.003l-13.977.023a2 2 0 0 1-2.003-1.996l-.044-26.99Zm9.044 33.972a1.998 1.998 0 1 0-.008-3.996 1.998 1.998 0 0 0 .008 3.996Z"
        clipRule="evenodd"
      />
      <Path
        fill="#333"
        d="M23.192 27.54c-1.589-1.316-2.895-2.398-3.806-3.416-.91-1.015-1.41-1.95-1.41-2.967-.002-1.656 1.418-2.957 3.228-2.959 1.024 0 2.01.436 2.653 1.125l.117.126.117-.126c.642-.69 1.627-1.128 2.652-1.129 1.81-.002 3.231 1.297 3.233 2.953 0 1.018-.497 1.953-1.405 2.97-.907 1.017-2.206 2.098-3.785 3.413l-.016.014-.788.652-.79-.656Z"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgFilledMobile);
export default ForwardRef;
