import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPills3 = (
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
      width="1.5em"
      height="1.5em"
      viewBox="0 0 48 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0 2a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.384 9.91a1 1 0 0 1 .914 1.08l-.602 7.187a1 1 0 0 1-1.994-.167l.603-7.187a1 1 0 0 1 1.08-.913ZM14.5 40a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0 2a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.757 36.757a1 1 0 0 1-1.414 0l-5.1-5.1a1 1 0 0 1 1.414-1.414l5.1 5.1a1 1 0 0 1 0 1.414ZM33.5 38a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0 2a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.759 29.745a1 1 0 0 1-.544 1.306l-6.668 2.748a1 1 0 0 1-.762-1.85l6.668-2.748a1 1 0 0 1 1.306.544Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPills3);
export default ForwardRef;
