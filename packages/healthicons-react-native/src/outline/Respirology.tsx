import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRespirology = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <Path
        d="M17.706 14.24c4.123-.003 3.753 5.605 3.755 7.848.002 2.863.715 8.64-1.49 10.842-2.248 2.245-6.745 3.37-8.996 1.503-2.25-1.867 1.483-20.188 6.73-20.193ZM30.236 14.232c-4.123.003-3.744 5.61-3.742 7.853.003 2.863-.7 8.64 1.509 10.84 2.25 2.241 6.75 3.36 8.997 1.488 2.248-1.87-1.516-20.186-6.764-20.181Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.968 6h2l.003 5.934.005 7.575c.001 1.402-.571 2.287-1.29 2.777a2.87 2.87 0 0 1-1.315.478 1.26 1.26 0 0 1-.036.003H22.314l-.004.001-.043-1-.043-.998h-.014l-.008.001h.007a.87.87 0 0 0 .35-.137c.136-.093.418-.338.417-1.123l-.005-7.576L22.968 6Z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.015 6h-2l-.004 5.934-.005 7.575c0 1.402.572 2.287 1.29 2.777a2.87 2.87 0 0 0 1.316.478l.036.003h.02l.004.001.043-1 .043-.998h.015l.007.001h-.006a.871.871 0 0 1-.35-.137c-.137-.093-.418-.338-.418-1.123l.005-7.576L25.015 6Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgRespirology);
export default ForwardRef;
