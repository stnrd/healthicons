import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPills3 = (
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
        d="M24.384 9.91a1 1 0 0 1 .914 1.08l-.602 7.187a1 1 0 0 1-1.994-.167l.603-7.187a1 1 0 0 1 1.08-.913ZM17.757 36.757a1 1 0 0 1-1.414 0l-5.1-5.1a1 1 0 0 1 1.414-1.414l5.1 5.1a1 1 0 0 1 0 1.414ZM37.215 31.05a1 1 0 0 0-.762-1.848l-6.668 2.748a1 1 0 0 0 .762 1.849l6.668-2.748Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM32.5 14.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-9.5 19a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0ZM33.5 40a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPills3);
export default ForwardRef;
