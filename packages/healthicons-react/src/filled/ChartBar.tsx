import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartBar = (
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
        d="M8 40V7H6v34a1 1 0 0 0 1 1h34v-2H8Z"
        fill="#333"
      />
      <path d="M12 25h6v16h-6V25Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 25a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V25Zm2 1v14h4V26h-4Z"
        fill="#333"
      />
      <path d="M22 21h6v20h-6V21Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 21a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V21Zm2 1v18h4V22h-4Z"
        fill="#333"
      />
      <path d="M32 13h6v28h-6V13Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V13Zm2 1v26h4V14h-4Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartBar);
export default ForwardRef;
