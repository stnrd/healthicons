import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgT = (
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
        d="M13 12a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6h-5v21a3 3 0 1 1-6 0V15h-5a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h7v23a1 1 0 1 0 2 0V13h7a1 1 0 1 0 0-2H16Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgT);
export default ForwardRef;
