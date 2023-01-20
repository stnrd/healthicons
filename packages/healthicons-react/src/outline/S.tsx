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
        d="M13 18a9 9 0 0 1 9-9h4a9.003 9.003 0 0 1 8.487 6 3 3 0 1 1-5.657 2A3.003 3.003 0 0 0 26 15h-4a3 3 0 1 0 0 6h4a9 9 0 1 1 0 18h-4a9.003 9.003 0 0 1-8.487-6 3 3 0 1 1 5.657-2A3.003 3.003 0 0 0 22 33h4a3 3 0 1 0 0-6h-4a9 9 0 0 1-9-9Zm9-7a7 7 0 1 0 0 14h4a5 5 0 0 1 0 10h-4a5.002 5.002 0 0 1-4.716-3.333 1 1 0 1 0-1.885.666A7.002 7.002 0 0 0 22 37h4a7 7 0 1 0 0-14h-4a5 5 0 0 1 0-10h4a5.002 5.002 0 0 1 4.716 3.333 1 1 0 1 0 1.885-.666A7.002 7.002 0 0 0 26 11h-4Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgS);
export default ForwardRef;
