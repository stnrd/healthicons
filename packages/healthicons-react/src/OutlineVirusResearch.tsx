import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineVirusResearch = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M23 6a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1ZM7 20a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6 23a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM32.192 9.565a1 1 0 0 1 1.415 0l2.828 2.828a1 1 0 1 1-1.414 1.415l-2.829-2.829a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M35.02 10.98a1 1 0 0 1 0 1.413l-2.828 2.829a1 1 0 0 1-1.414-1.414l2.829-2.829a1 1 0 0 1 1.414 0ZM13.808 9.565a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 0 1-1.414-1.415l2.828-2.828a1 1 0 0 1 1.415 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10.98 10.98a1 1 0 0 1 1.413 0l2.829 2.828a1 1 0 0 1-1.414 1.414l-2.829-2.829a1 1 0 0 1 0-1.414Zm2.828 25.455a1 1 0 0 1-1.415 0l-2.828-2.828a1 1 0 0 1 1.414-1.414l2.829 2.828a1 1 0 0 1 0 1.414Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10.98 35.02a1 1 0 0 1 0-1.413l2.828-2.829a1 1 0 0 1 1.414 1.415l-2.829 2.828a1 1 0 0 1-1.414 0ZM19.5 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM16 20.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0ZM31.5 25a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM23 31.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M36.293 36.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414ZM23 13c-5.523 0-10 4.477-10 10 0 4.9 3.526 8.98 8.18 9.835a1 1 0 1 1-.36 1.967C15.232 33.776 11 28.883 11 23c0-6.627 5.373-12 12-12 5.883 0 10.776 4.233 11.802 9.82a1 1 0 0 1-1.967.36C31.98 16.527 27.901 13 23 13Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineVirusResearch);
export default ForwardRef;
