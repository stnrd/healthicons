import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgS = (
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
        d="M22 14a4 4 0 0 0 0 8h4a8 8 0 1 1 0 16h-4a8.003 8.003 0 0 1-7.544-5.334 2 2 0 0 1 3.771-1.332A4.002 4.002 0 0 0 22 34h4a4 4 0 0 0 0-8h-4a8 8 0 1 1 0-16h4a8.003 8.003 0 0 1 7.544 5.334 2 2 0 0 1-3.771 1.332A4.002 4.002 0 0 0 26 14h-4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgS);
export default ForwardRef;
