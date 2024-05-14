import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgInteroperability = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.94 22.342a1 1 0 0 1-1.282.598l-5.5-2a1 1 0 1 1 .684-1.88l5.5 2a1 1 0 0 1 .598 1.282ZM37.428 19.629a1 1 0 0 1-.557 1.3l-5 2a1 1 0 0 1-.742-1.857l5-2a1 1 0 0 1 1.3.557ZM20.088 29.692a1 1 0 0 1 .22 1.396l-4 5.5a1 1 0 1 1-1.617-1.176l4-5.5a1 1 0 0 1 1.397-.22ZM33.088 36.809a1 1 0 0 1-1.397-.22l-4-5.5a1 1 0 1 1 1.618-1.177l4 5.5a1 1 0 0 1-.22 1.397ZM24 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23.902 17.5a1 1 0 0 1-1-1V10a1 1 0 1 1 2 0v6.5a1 1 0 0 1-1 1Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 7.902a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-2 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0ZM39 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 39a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM34 39a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgInteroperability);
export default ForwardRef;
