import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPulseOximeterAlt = (
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
        d="M7 10a3 3 0 0 0-3 3v4.85a2 2 0 0 0 .383 1.176l1.234 1.698A2 2 0 0 1 6 21.9v4.2a2 2 0 0 1-.383 1.176l-1.234 1.698A2 2 0 0 0 4 30.15V35a3 3 0 0 0 3 3h23c7.732 0 14-6.268 14-14s-6.268-14-14-14H7Zm5 6h18a8 8 0 1 1 0 16H12a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1Zm-3 1a3 3 0 0 1 3-3h18c5.523 0 10 4.477 10 10s-4.477 10-10 10H12a3 3 0 0 1-3-3V17Zm27 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-21-6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H15Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 23a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM25.172 24.853c.062.055.078.109.078.147 0 .04-.018.1-.092.159a.74.74 0 0 0-.022.017l-2.625 2.255A.75.75 0 0 0 23 28.75h3a.75.75 0 0 0 0-1.5h-.976l1.08-.928c.38-.307.646-.776.646-1.322 0-1.047-.925-1.75-1.875-1.75h-.75c-.764 0-1.478.436-1.758 1.14a.75.75 0 0 0 1.394.554c.029-.073.148-.194.364-.194h.75c.131 0 .234.047.297.103Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPulseOximeterAlt);
export default ForwardRef;
