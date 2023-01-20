import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicines = (
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
        d="M42 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-3.718.985a1 1 0 0 1-1.198.75l-6.616-1.52a1 1 0 0 1 .448-1.95l6.616 1.521a1 1 0 0 1 .75 1.199Z"
        fill="#333"
      />
      <path
        d="M16.778 9.245c-.647-1.532-2.813-1.686-3.682-.263L6.292 20.115c-.785 1.284.092 2.924 1.623 3.033l11.866.846c1.53.11 2.644-1.388 2.06-2.77L16.778 9.245Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.385 36.36a6 6 0 0 0-5.071-10.877l-10.876 5.072a6 6 0 1 0 5.071 10.876l10.876-5.072Zm-5.442.33 4.597-2.143a4 4 0 0 0-3.381-7.25l-4.597 2.143 3.38 7.25Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicines);
export default ForwardRef;
