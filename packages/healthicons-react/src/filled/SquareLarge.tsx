import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSquareLarge = (
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M6 7a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v34a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSquareLarge);
export default ForwardRef;
