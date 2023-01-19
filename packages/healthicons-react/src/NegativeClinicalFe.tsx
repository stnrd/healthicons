import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeClinicalFe = (
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
      <path
        fill="#333"
        d="M14 9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9Zm0 9v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2Zm-2 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H12Zm-1 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM15 6a3 3 0 0 0-3 3H9a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V12a3 3 0 0 0-3-3h-3a3 3 0 0 0-3-3h-8Zm21 12a3 3 0 1 1 6 0v3h-6v-3Zm0 20V23h6v15l-3 4-3-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeClinicalFe);
export default ForwardRef;
