import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineChartBarStacked = (
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
        fillRule="evenodd"
        d="M8 40V7H6v34a1 1 0 0 0 1 1h34v-2H8Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M11 25a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V25Zm2 1v14h4V26h-4Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M11 33a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8Zm2 1v6h4v-6h-4Zm8-13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V21Zm2 1v18h4V22h-4Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M21 29a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V29Zm2 1v10h4V30h-4Zm8-17a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V13Zm2 1v26h4V14h-4Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M31 25a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V25Zm2 1v14h4V26h-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineChartBarStacked);
export default ForwardRef;
