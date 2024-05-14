import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartInfectedIncreasing = (
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
      <g clipPath="url(#chart-infected-increasing_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24.097 19.661a5.48 5.48 0 0 1-2.597 1.248v2.102A1 1 0 0 1 21.35 25h-1.7a1 1 0 0 1-.15-1.989V20.91a5.468 5.468 0 0 1-2.117-.877l-1.419 1.418.143.143a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 1.414-1.414l.143.143 1.418-1.419a5.468 5.468 0 0 1-.877-2.117h-2.102A1 1 0 0 1 11 16.35v-1.7a1 1 0 0 1 1.989-.15h2.102a5.468 5.468 0 0 1 .877-2.117l-1.418-1.419-.143.143a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 1 1 1.414 1.414l-.143.143 1.418 1.418a5.468 5.468 0 0 1 2.118-.877V7.989A1 1 0 0 1 19.65 6h1.7a1 1 0 0 1 .15 1.989v2.102a5.468 5.468 0 0 1 2.117.877l1.419-1.418-.143-.143a1 1 0 0 1 1.414-1.414l1.7 1.7a1 1 0 0 1-1.414 1.414l-.143-.143-1.418 1.418c.43.625.735 1.343.877 2.118h2.102a1 1 0 0 1 1.989.15v1.7a1 1 0 0 1-1.989.15H25.91a5.463 5.463 0 0 1-.555 1.59l1.946 1.946.143-.143a1 1 0 0 1 1.414 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l.143-.143-1.79-1.789Zm16.018-.196-1.445-2.753c-1.613 7.111-4.99 12.125-9.622 15.39C24.112 35.582 17.858 37 11.052 37H8v3h34v2H7a1 1 0 0 1-1-1V6h2v29h3.052c6.552 0 12.354-1.368 16.843-4.532 4.153-2.927 7.277-7.457 8.803-14.106l-2.133 1.463a1 1 0 1 1-1.13-1.65l4.374-3a1 1 0 0 1 1.451.36l2.625 5a1 1 0 1 1-1.77.93Z"
        />
      </g>
      <defs>
        <clipPath id="chart-infected-increasing_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartInfectedIncreasing);
export default ForwardRef;
