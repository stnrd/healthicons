import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgOxygenTank = (
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
        d="M19 6.048h-2v2h5v2h-5v2.083c2.838.476 5 2.944 5 5.917v2H10v-2a6.002 6.002 0 0 1 5-5.917v-2.083h-2.17a3.001 3.001 0 0 1-5.83-1 3 3 0 0 1 5.83-1H15v-2h-2v-2h6v2Zm-9 16v21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-21H10Zm0-14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm16 13a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0v-6Zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 4 0v-6a2 2 0 0 0-2-2Zm5 7h3a1 1 0 1 1 0 2 3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h5v-2h-4v-1a1 1 0 0 1 1-1 3 3 0 0 0 0-6h-3v2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOxygenTank);
export default ForwardRef;
