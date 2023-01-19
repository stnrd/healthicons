import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegative0 = (
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
        d="M18 18a4 4 0 0 1 4-4h4a4 4 0 0 1 1.25.198L18 29.381V18Zm2.146 15.546 9.815-16.11c.026.184.039.373.039.564v12a4 4 0 0 1-4 4h-4c-.67 0-1.3-.163-1.854-.454Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM22 10a8 8 0 0 0-8 8v12c0 2.048.772 3.92 2.038 5.334A7.985 7.985 0 0 0 22 38h4a8 8 0 0 0 8-8V18c0-2.37-1.033-4.5-2.666-5.963A7.977 7.977 0 0 0 26 10h-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegative0);
export default ForwardRef;
