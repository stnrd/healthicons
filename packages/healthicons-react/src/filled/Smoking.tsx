import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSmoking = (
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
      <path d="M37 11a1 1 0 0 1 1-1 5 5 0 0 1 5 5v1.59a4.4 4.4 0 0 1-1.644 3.436A5.994 5.994 0 0 1 44 25v3a1 1 0 1 1-2 0v-3a4 4 0 0 0-4-4 1 1 0 1 1 0-2h.59A2.41 2.41 0 0 0 41 16.59V15a3 3 0 0 0-3-3 1 1 0 0 1-1-1Z" />
      <path d="M34 17a3 3 0 0 0-3 3v1.818a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3V28a1 1 0 1 1-2 0v-.182a1 1 0 0 0-1-1h-3a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5 1 1 0 1 1 0 2ZM7 31a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H7ZM40 32a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM44 32a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSmoking);
export default ForwardRef;
