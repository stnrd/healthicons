import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineUiSecure = (
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
        d="M15 17a9 9 0 1 1 18 0v1h2v-1c0-6.075-4.925-11-11-11s-11 4.925-11 11v1h2v-1Zm16 1v-1a7 7 0 1 0-14 0v1h2v-1a5 5 0 0 1 10 0v1h2Zm-14 2h20v20H11V20h4v-2h-4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2V20a2 2 0 0 0-2-2H17v2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M33 26H15v-2h18v2Zm0 5H15v-2h18v2Zm0 5H15v-2h18v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineUiSecure);
export default ForwardRef;
