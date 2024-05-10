import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCane = (
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
      <path d="M25.86 38.836a1 1 0 0 1 .987-.836h.306a1 1 0 0 1 .986.836l.667 4A1 1 0 0 1 27.82 44h-1.64a1 1 0 0 1-.986-1.164l.667-4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 43a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM27 15a1.5 1.5 0 0 1-1.5-1.5v-3c0-1.31-.397-2.146-.852-2.639A2.23 2.23 0 0 0 23 7.125a2.23 2.23 0 0 0-1.648.736c-.455.493-.852 1.329-.852 2.639a1.5 1.5 0 0 1-3 0c0-1.94.603-3.541 1.648-4.674A5.229 5.229 0 0 1 23 4.125c1.41 0 2.813.575 3.852 1.701C27.897 6.96 28.5 8.56 28.5 10.5v3A1.5 1.5 0 0 1 27 15ZM27 16.366A1.53 1.53 0 0 1 26 16v21a1.53 1.53 0 0 1 1-.366c.384 0 .735.138 1 .366V16a1.53 1.53 0 0 1-1 .366Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCane);
export default ForwardRef;
