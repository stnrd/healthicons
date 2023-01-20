import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUnhealthyFood = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="m31.227 4-1.21 4.64.069-1.01L24 10.541V6.648L17 8.79v3.62l-1.77-6.603-5.602 5.237 2.44 9.103c.115.06.222.137.317.228.83.803 1.629 1.532 2.4 2.189l-2.914-10.879 2.29-2.14L17 20.131v4.161c.683.482 1.348.9 2 1.25V10.27l3-.917V26.72c.76.178 1.51.259 2.262.241l1.006-14.81 2.59-1.24-1.061 15.624c.807-.25 1.626-.612 2.466-1.082l2.328-8.687 2.84-.852-1.96 7.312a43.453 43.453 0 0 0 2.723-2.435l2.148-8.014-1.767.452L38.344 4h-7.117Zm4.429 2-2.343 7.808-2.762.706L32.773 6h2.883Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.588 23.169c-3.951 3.63-7.6 5.802-11.542 5.796-3.944-.006-7.626-2.194-11.638-5.828L14.765 42h18.47l2.353-18.831ZM11.47 20c-.78 0-1.384.684-1.287 1.458l2.599 20.79A2 2 0 0 0 14.765 44h18.47a2 2 0 0 0 1.984-1.752l2.6-20.795a1.293 1.293 0 0 0-2.204-1.071c-8.94 8.796-14.16 8.76-23.23-.007A1.327 1.327 0 0 0 11.47 20Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgUnhealthyFood);
export default ForwardRef;
