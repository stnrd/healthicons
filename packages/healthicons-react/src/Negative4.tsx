import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegative4 = (
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
      <path fill="#333" d="M26 18.606V28h-6.263L26 18.606Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM30 12a2 2 0 0 0-3.664-1.11l-12 18A2 2 0 0 0 16 32h10v4a2 2 0 0 0 4 0v-4h2a2 2 0 1 0 0-4h-2V12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegative4);
export default ForwardRef;
