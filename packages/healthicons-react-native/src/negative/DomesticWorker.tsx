import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDomesticWorker = (passedProps: SvgProps, ref: Ref<SVGSVGElement>) => {
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
        d="M0 0h48v48H0V0Zm24 25c3.437 0 6-2.582 6-5.5S27.437 14 24 14s-6 2.582-6 5.5 2.563 5.5 6 5.5Zm0 2c4.418 0 8-3.358 8-7.5 0-.168-.006-.335-.017-.5H32v-6.743a5 5 0 0 0-3.378-4.73l-4.298-1.473L24 5.943l-.324.111-4.298 1.473A5 5 0 0 0 16 12.257V19h.017a7.141 7.141 0 0 0-.017.5c0 4.142 3.582 7.5 8 7.5Zm-6-12.46v-2.283a3 3 0 0 1 2.027-2.838L24 8.057l3.973 1.362A3 3 0 0 1 30 12.257v2.282C28.534 12.982 26.39 12 24 12s-4.534.982-6 2.54Zm5.474 20.443a4 4 0 1 1-6.334-4.78c.617 2.594 3.186 4.58 6.334 4.78Zm-5.632-5.352C12.146 30.697 6 33.122 6 37v5h36v-5c0-3.7-5.597-6.079-11.06-7.214a40.324 40.324 0 0 0-1.94-.354v.068c0 1.93-2.232 3.495-4.988 3.5h-.024C21.232 32.995 19 31.43 19 29.5l.001-.068c-.383.06-.77.127-1.159.2Zm13.017.572c-.616 2.594-3.185 4.58-6.333 4.78a4 4 0 1 0 6.334-4.78ZM14 42v-6h-2v6h2Zm22-6v6h-2v-6h2Z"
        fill="#333"
      />
    </Svg>
  );
};
const ForwardRef = forwardRef(SvgDomesticWorker);
export default ForwardRef;
