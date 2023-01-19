import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeP = (
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
      <path fill="#333" d="M26 22h-8v-8h8a4 4 0 0 1 0 8Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM16 10a2 2 0 0 0-2 2v24a2 2 0 1 0 4 0V26h8a8 8 0 1 0 0-16H16Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeP);
export default ForwardRef;
