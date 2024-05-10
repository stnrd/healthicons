import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgI = (
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
        d="M13 12a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6h-5v18h5a3 3 0 1 1 0 6H16a3 3 0 1 1 0-6h5V15h-5a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h7v22h-7a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-7V13h7a1 1 0 1 0 0-2H16Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgI);
export default ForwardRef;
