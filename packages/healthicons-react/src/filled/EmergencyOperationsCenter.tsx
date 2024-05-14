import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEmergencyOperationsCenter = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 11a1 1 0 1 1 2 0v1h2a3 3 0 1 1 0 6h-2v1h4v2h-4v3h4.586l4.476-4.477a7.006 7.006 0 0 1 1.645-9.473l4.192 4.193.95-.95a1 1 0 0 1 1.415 1.414l-.95.95 4.192 4.192a7.065 7.065 0 0 1-1.414 1.415A7.009 7.009 0 0 1 29 22.03V24h13v2h-2v14h1a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1V26H6v-2h9v-3h-4v-2h4v-1h-2a3 3 0 1 1 0-6h2v-1Zm12 10.414L24.414 24H27v-2.586ZM31 40h5v-8h-5v8ZM13 14h2v2h-2a1 1 0 1 1 0-2Zm6 0h-2v2h2a1 1 0 1 0 0-2Zm15.657 5.829a5.002 5.002 0 0 1-6.93-6.93l6.93 6.93ZM17 36v-4h-5v4h5Zm7 0v-4h-5v4h5Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEmergencyOperationsCenter);
export default ForwardRef;
