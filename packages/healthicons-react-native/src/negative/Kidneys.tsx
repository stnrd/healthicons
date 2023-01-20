import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgKidneys = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M0 0h48v48H0V0Zm35.312 30.753c10.865-4.582 6.577-20.049-.965-22.604-3.128-1.06-6.58 2.457-6.558 4.64.01.945.496 1.865 1.004 2.824.666 1.26 1.368 2.585 1.07 4.118-.525 2.7-1.113 7.256.402 9.419 1.515 2.162 3.038 2.45 5.047 1.603ZM29 23c.075.997.076.997.077.997h.008l.007-.001.008-.001-.012.002a1.163 1.163 0 0 0-.471.22c-.228.178-.617.617-.617 1.766v14.016L27 40h-1V25.983c0-1.683.611-2.736 1.383-3.34a3.161 3.161 0 0 1 1.357-.616c.046-.008.085-.013.116-.017l.026-.003.014-.002.016-.001h.01l.001-.001s.002 0 .077.997Zm-16.452 7.753c-10.864-4.582-6.577-20.049.965-22.604 3.129-1.06 6.58 2.457 6.559 4.64-.01.945-.497 1.865-1.005 2.824-.666 1.26-1.368 2.585-1.07 4.118.525 2.7 1.113 7.256-.402 9.419-1.515 2.162-3.038 2.45-5.047 1.603ZM19 23c-.075.997-.076.997-.077.997h-.008l-.007-.001-.008-.001.012.002a1.163 1.163 0 0 1 .471.22c.228.178.617.617.617 1.766v14.016L21 40h1V25.983c0-1.683-.611-2.736-1.383-3.34a3.161 3.161 0 0 0-1.357-.616 2.186 2.186 0 0 0-.116-.017l-.04-.005-.016-.001h-.01l-.001-.001s-.002 0-.077.997Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgKidneys);
export default ForwardRef;
