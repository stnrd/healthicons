import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilled4 = (
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
        d="M28.58 10.086A2 2 0 0 1 30 12v16h2a2 2 0 1 1 0 4h-2v4a2 2 0 0 1-4 0v-4H16a2 2 0 0 1-1.664-3.11l12-18a2 2 0 0 1 2.244-.804ZM26 28v-9.394L19.737 28H26Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilled4);
export default ForwardRef;
