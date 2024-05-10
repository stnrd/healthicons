import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDollar = (
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
        d="M26 8a2 2 0 1 0-4 0v2a8 8 0 1 0 0 16v8a4.002 4.002 0 0 1-3.773-2.666 2 2 0 0 0-3.771 1.332A8.003 8.003 0 0 0 22 38v2a2 2 0 1 0 4 0v-2a8 8 0 1 0 0-16v-8a4.002 4.002 0 0 1 3.773 2.666 2 2 0 0 0 3.771-1.332A8.003 8.003 0 0 0 26 10V8Zm-4 6a4 4 0 0 0 0 8v-8Zm4 12v8a4 4 0 0 0 0-8Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDollar);
export default ForwardRef;
