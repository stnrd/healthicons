import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgJ = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 12a3 3 0 1 1 6 0v18a9 9 0 1 1-18 0 3 3 0 0 1 6 0 3 3 0 1 0 6 0V12Zm3-1a1 1 0 0 0-1 1v18a5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 1 0 14 0V12a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgJ);
export default ForwardRef;
