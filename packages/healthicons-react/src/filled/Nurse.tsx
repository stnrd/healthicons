import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNurse = (
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
        d="M24 6c-2.806 0-6.238 1.026-8.264 1.731-.988.344-1.483 1.417-1.156 2.41l2.148 6.521a8 8 0 1 0 14.544 0l2.148-6.52c.327-.994-.168-2.067-1.156-2.41C30.237 7.025 26.806 6 24 6Zm-5.62 12.425c3.757-1.543 7.483-1.543 11.24 0 .06.025.123.043.186.056a6 6 0 1 1-11.613 0c.064-.013.126-.031.187-.056ZM25 11h2v2h-2v2h-2v-2h-2v-2h2V9h2v2Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.85 32.193 16.88 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-5.972 4.193a2 2 0 0 1-2.298 0ZM32 32h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNurse);
export default ForwardRef;
