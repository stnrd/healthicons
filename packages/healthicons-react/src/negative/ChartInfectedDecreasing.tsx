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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h48v48H0V0Zm36.148 19.616A5.482 5.482 0 0 1 33.5 20.91v2.102A1 1 0 0 1 33.35 25h-1.7a1 1 0 0 1-.15-1.989V20.91a5.468 5.468 0 0 1-2.117-.877l-1.419 1.418.143.143a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 1.414-1.414l.143.143 1.418-1.419a5.468 5.468 0 0 1-.877-2.117h-2.102A1 1 0 0 1 23 16.35v-1.7a1 1 0 0 1 1.989-.15h2.102a5.468 5.468 0 0 1 .877-2.117l-1.418-1.419-.143.143a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 1 1 1.414 1.414l-.143.143 1.419 1.418a5.468 5.468 0 0 1 2.117-.877V7.989A1 1 0 0 1 31.65 6h1.7a1 1 0 0 1 .15 1.989v2.102a5.468 5.468 0 0 1 2.117.877l1.419-1.418-.143-.143a1 1 0 0 1 1.414-1.414l1.7 1.7a1 1 0 0 1-1.414 1.414l-.143-.143-1.418 1.418c.43.625.735 1.343.877 2.118h2.102a1 1 0 0 1 1.989.15v1.7a1 1 0 0 1-1.989.15H37.91a5.458 5.458 0 0 1-.52 1.521l1.925 2.001.129-.13a1 1 0 0 1 1.414 1.415l-1.7 1.7a1 1 0 0 1-1.414-1.414l.156-.157-1.75-1.82ZM8 6H6v35a1 1 0 0 0 1 1h35v-2H8V18h.871c2.016 0 4.021.612 5.864 1.815 1.846 1.204 3.482 2.971 4.765 5.186 1.419 2.45 3.262 4.462 5.402 5.86C27.047 32.258 29.428 33 31.86 33h6.506l-3.073 3.075a1 1 0 0 0 1.414 1.414l4.78-4.782a1 1 0 0 0 0-1.414l-4.78-4.782a1 1 0 0 0-1.414 1.414L38.367 31H31.86c-2.016 0-4.022-.612-5.865-1.815-1.845-1.204-3.482-2.971-4.764-5.186-1.419-2.45-3.262-4.462-5.403-5.86C13.684 16.742 11.303 16 8.871 16H8V6Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartInfectedDecreasing);
export default ForwardRef;
