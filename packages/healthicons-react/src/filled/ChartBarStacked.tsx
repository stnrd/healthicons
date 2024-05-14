import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartBarStacked = (
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
        d="M7 42a1 1 0 0 1-1-1V7h2v33h3V25a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15h2V21a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v19h2V13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v27h2v2H7Zm30-18V14h-4v10h4Zm-14 4h4v-6h-4v6Zm-6 4v-6h-4v6h4Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartBarStacked);
export default ForwardRef;
