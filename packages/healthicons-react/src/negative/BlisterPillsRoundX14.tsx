import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsRoundX14 = (
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
        d="M23.6 39.8a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2ZM24.2 37.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0ZM23.6 33.8a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2ZM24.2 31.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0ZM23.6 27.8a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2ZM24.2 25.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0ZM23.6 21.8a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2ZM24.2 19.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0ZM23.6 15.8a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2ZM24.2 13.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0ZM23.6 9.8a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2ZM24.2 7.4a.6.6 0 1 0-1.2 0 .6.6 0 0 0 1.2 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM16 4h7.153a.6.6 0 1 0 .894 0H32a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4h-8.4a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2H16a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
        fill="#333"
      />
      <path
        d="M19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19 23.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19 28.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19 33.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19 38.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM31 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM31 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM31 18.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM31 23.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM31 28.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM31 33.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM31 38.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBlisterPillsRoundX14);
export default ForwardRef;
