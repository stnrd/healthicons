import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPills2 = (
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
        d="M16 26c5.523 0 10-4.477 10-10S21.523 6 16 6 6 10.477 6 16s4.477 10 10 10Zm4.304-10.692a1 1 0 0 0-.762-1.849l-7.846 3.233a1 1 0 1 0 .763 1.85l7.845-3.234ZM32 42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Zm3.91-8.075a1 1 0 1 0 .449-1.949l-8.27-1.901a1 1 0 1 0-.448 1.949l8.27 1.901Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPills2);
export default ForwardRef;
