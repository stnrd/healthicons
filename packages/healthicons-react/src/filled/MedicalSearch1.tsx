import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSearch1 = (
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
      <path d="M23 31.584a5 5 0 1 1 0-9.168v9.168Z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.005 4.898A1 1 0 0 1 11 4h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v2.273a1.5 1.5 0 0 1 1 1.415V18a9 9 0 0 1 7.032 14.618l2.45 2.45a2 2 0 0 1 1.932.518l5 5a2 2 0 1 1-2.828 2.828l-5-5a2 2 0 0 1-.518-1.932l-2.45-2.45A8.962 8.962 0 0 1 21 36v3a5.002 5.002 0 0 1-10 0V12.687a1.5 1.5 0 0 1 1-1.414V9h-1a1 1 0 0 1-1-1V5c0-.035.002-.069.005-.102Zm7.365 16.115a7 7 0 1 1-1.367 10.889L16 31.899A6.977 6.977 0 0 1 14 27c0-1.907.763-3.636 2-4.899a7.036 7.036 0 0 1 1.37-1.088Zm1.63-7.91a1.5 1.5 0 0 1-1-1.415V9h-4v2.688a1.5 1.5 0 0 1-1 1.414V18h6v-4.898Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicalSearch1);
export default ForwardRef;
