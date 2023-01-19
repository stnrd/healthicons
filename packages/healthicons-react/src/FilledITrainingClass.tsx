import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledITrainingClass = (
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
        d="M6 6h31v5h-2V8H8v23h21.387v2H6V6Zm30 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2.031 2.01c1.299 0 2.327.584 3 1.486.629.845.895 1.89.955 2.855a7.626 7.626 0 0 1-.397 2.92c-.3.87-.807 1.77-1.589 2.387V40.5a1.5 1.5 0 0 1-2.98.247L35.73 33h-.298l-1.458 7.776A1.5 1.5 0 0 1 31 40.5V26.233a63.223 63.223 0 0 0-.592.919l-.078.123-.02.032-.005.009a1.5 1.5 0 0 1-1.274.707h-5a1.5 1.5 0 1 1 0-3h4.177c.243-.376.563-.864.899-1.354.35-.511.736-1.052 1.08-1.476.167-.207.354-.423.542-.6.092-.087.22-.2.376-.3a1.72 1.72 0 0 1 .926-.282h6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledITrainingClass);
export default ForwardRef;
