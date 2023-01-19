import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineUiMenu = (
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
        d="M6 11a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 13a1 1 0 0 1 1-1h34a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineUiMenu);
export default ForwardRef;
