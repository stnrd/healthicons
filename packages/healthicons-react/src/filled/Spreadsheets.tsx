import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSpreadsheets = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path d="M16 20v3h16v-3H16ZM16 28v-3h4v3h-4ZM16 30v3h4v-3h-4ZM22 30v3h4v-3h-4ZM28 30v3h4v-3h-4ZM28 28v-3h4v3h-4ZM26 28h-4v-3h4v3Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 4H11a1 1 0 0 0-1 1v38a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12h-7a1 1 0 0 1-1-1V4ZM14 19a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V19Z"
      />
      <path d="M37.414 10H32V4.586L37.414 10Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSpreadsheets);
export default ForwardRef;
