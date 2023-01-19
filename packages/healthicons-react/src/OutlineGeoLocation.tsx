import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineGeoLocation = (
  passedProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const context = React.useContext(HealthIconsContext);
  const props = {
    ...context,
    ...passedProps,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15.517 11.535A11.961 11.961 0 0 1 24 8c3.18 0 6.232 1.27 8.483 3.535A12.116 12.116 0 0 1 36 20.077c0 5.526-3.064 10.528-6.256 14.221a41.41 41.41 0 0 1-4.363 4.328A35.74 35.74 0 0 1 24 39.752a36.53 36.53 0 0 1-1.381-1.126 41.41 41.41 0 0 1-4.363-4.328C15.064 30.605 12 25.603 12 20.077c0-3.205 1.266-6.277 3.517-8.542Zm7.907 30.282L24 41l.576.817a1.002 1.002 0 0 1-1.152 0Zm0 0L24 41l.576.817.004-.002.01-.007.03-.023.118-.085c.1-.074.246-.182.43-.324.368-.282.89-.697 1.513-1.23a43.403 43.403 0 0 0 4.575-4.54C34.564 31.78 38 26.319 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.962 13.962 0 0 0 24 6a13.962 13.962 0 0 0-9.902 4.125A14.117 14.117 0 0 0 10 20.077c0 6.242 3.436 11.703 6.744 15.529a43.403 43.403 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a25.536 25.536 0 0 0 .547.41l.032.022.009.007.004.002ZM20 20a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineGeoLocation);
export default ForwardRef;
