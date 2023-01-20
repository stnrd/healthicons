import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartLine = (
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
        d="M8 40V7H6v34a1 1 0 0 0 1 1h35v-2H8Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m15.285 26.12-7.5 9.5-1.57-1.24 7.5-9.5 1.57 1.24ZM27.684 28.949l-12-4 .632-1.898 12 4-.632 1.898Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m38.768 16.64-10 12-1.536-1.28 10-12 1.536 1.28Z"
        fill="#333"
      />
      <path d="M19 24a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="#333"
      />
      <path d="M31 28a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 29a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="#333"
      />
      <path d="M41 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#333" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartLine);
export default ForwardRef;
