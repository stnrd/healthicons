import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospital = (
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
        d="M8 43a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM19 8h-9V6h9v2ZM39 8h-9V6h9v2ZM17 11h-6V9h6v2ZM37 11h-6V9h6v2ZM32 38H16v-2h16v2ZM25 7v8h-2V7h2Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10h8v2h-8v-2Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 6H19v10h10V6ZM19 4h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM11 42V7h2v35h-2ZM35 42V7h2v35h-2ZM23 42v-4h2v4h-2ZM29 42v-4h2v4h-2ZM17 42v-4h2v4h-2Z"
        fill="#333"
      />
      <path
        d="M16 20h4v3h-4v-3ZM16 25h4v3h-4v-3ZM16 30h4v3h-4v-3ZM22 20h4v3h-4v-3ZM22 25h4v3h-4v-3ZM22 30h4v3h-4v-3ZM28 20h4v3h-4v-3ZM28 25h4v3h-4v-3ZM28 30h4v3h-4v-3Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospital);
export default ForwardRef;
