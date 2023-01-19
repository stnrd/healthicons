import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeBlisterPillsRoundX14 = (
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
        d="M23.6 39.8a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Zm-.6-3.6a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2Zm.6-2.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM16 4h7.153a.6.6 0 1 0 .894 0H32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-8.4a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2H16a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12-30a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeBlisterPillsRoundX14);
export default ForwardRef;
