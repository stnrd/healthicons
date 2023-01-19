import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilled0 = (
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
        d="M22 14a4 4 0 0 0-4 4v11.38l9.25-15.18A4 4 0 0 0 26 14h-4Zm7.96 3.436-9.814 16.11A3.98 3.98 0 0 0 22 34h4a4 4 0 0 0 4-4V18c0-.191-.013-.38-.04-.564ZM14 18a8 8 0 0 1 8-8h4a7.98 7.98 0 0 1 5.334 2.037A7.985 7.985 0 0 1 34 18v12a8 8 0 0 1-8 8h-4c-2.37 0-4.5-1.033-5.962-2.666A7.977 7.977 0 0 1 14 30V18Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilled0);
export default ForwardRef;
