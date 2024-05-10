import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartInfectedDecreasing = (
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
      <path d="M6 41a1 1 0 0 0 1 1h35v-2H8V18h.871c2.016 0 4.021.612 5.864 1.815 1.846 1.204 3.482 2.971 4.765 5.186 1.419 2.45 3.262 4.462 5.402 5.86C27.047 32.258 29.428 33 31.86 33h6.506l-3.073 3.075a1 1 0 0 0 1.414 1.414l4.78-4.782a1 1 0 0 0 0-1.414l-4.78-4.782a1 1 0 0 0-1.414 1.414L38.367 31H31.86c-2.016 0-4.022-.612-5.865-1.815-1.845-1.204-3.482-2.971-4.764-5.186-1.419-2.45-3.262-4.462-5.403-5.86C13.684 16.742 11.303 16 8.871 16H8V6H6v35Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.65 6a1 1 0 0 0-.15 1.989v1.493a6.068 6.068 0 0 0-2.548 1.056l-.988-.988.143-.143a1 1 0 0 0-1.414-1.414l-1.7 1.7a1 1 0 0 0 1.414 1.414l.143-.143.988.988a6.067 6.067 0 0 0-1.056 2.548h-1.493a1 1 0 0 0-1.989.15v1.7a1 1 0 0 0 1.989.15h1.493a6.067 6.067 0 0 0 1.056 2.548l-.988.988-.143-.143a1 1 0 0 0-1.414 1.414l1.7 1.7a1 1 0 0 0 1.414-1.414l-.143-.143.988-.988c.742.532 1.609.902 2.548 1.056v1.493A1 1 0 0 0 31.65 25h1.7a1 1 0 0 0 .15-1.989v-1.493a6.078 6.078 0 0 0 3.022-1.432l1.364 1.364-.143.143a1 1 0 0 0 1.414 1.414l1.7-1.7a1 1 0 0 0-1.414-1.414l-.143.143-1.505-1.505a6.06 6.06 0 0 0 .723-2.031h1.493A1 1 0 0 0 42 16.35v-1.7a1 1 0 0 0-1.989-.15h-1.493a6.067 6.067 0 0 0-1.056-2.548l.988-.988.143.143a1 1 0 0 0 1.414-1.414l-1.7-1.7a1 1 0 1 0-1.414 1.414l.143.143-.988.988A6.068 6.068 0 0 0 33.5 9.482V7.989A1 1 0 0 0 33.35 6h-1.7Zm.85 13.6a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartInfectedDecreasing);
export default ForwardRef;
