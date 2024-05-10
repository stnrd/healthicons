import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRuralPost = (
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
      <path d="M39 12h4v2h-4v-2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 16h17v2H8v19h21V25h8v12h3V18h-1v-2h3v21h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1V16Zm25 21h4V27h-4v10Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 32h-1v-7H11v7h-1v2h17v-2Zm-14-5v5h11v-5H13Z"
      />
      <path d="M5 12v2h18v-2H5ZM34 15h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37 12a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8Zm-10 0h8v8h-8v-8Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRuralPost);
export default ForwardRef;
