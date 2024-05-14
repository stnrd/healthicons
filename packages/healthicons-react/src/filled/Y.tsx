import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgY = (
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
        d="M35.28 10.464a2 2 0 0 1 .256 2.816L26 24.724V36a2 2 0 0 1-4 0V24.724L12.464 13.28a2 2 0 1 1 3.072-2.56L24 20.876l8.464-10.156a2 2 0 0 1 2.816-.256Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgY);
export default ForwardRef;
