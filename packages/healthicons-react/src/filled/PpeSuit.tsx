import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeSuit = (
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
        d="M18 8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6.417h1a4 4 0 0 1 4 4V31a3 3 0 0 1-4 2.83V41a3 3 0 1 1-6 0V29h-2v12a3 3 0 1 1-6 0v-7.17A3 3 0 0 1 13 31V18.417a4 4 0 0 1 4-4h1V8Zm13 23a1 1 0 1 0 2 0v-1h-2v1Zm-15 1a1 1 0 0 1-1-1v-1h2v1a1 1 0 0 1-1 1Zm10-21a2 2 0 0 0 2-2V7h-8v2a2 2 0 0 0 2 2h4Zm-8.6 12.792h5.5v-9.375h2.2v9.375h5.5v2.083H17.4v-2.083Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeSuit);
export default ForwardRef;
