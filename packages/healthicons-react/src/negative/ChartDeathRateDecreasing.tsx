import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartDeathRateDecreasing = (
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
      <g clipPath="url(#chart-death-rate-decreasing_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm38.67 16.712 1.445 2.753a1 1 0 1 0 1.77-.93l-2.625-5a1 1 0 0 0-1.45-.36l-4.376 3a1 1 0 1 0 1.132 1.65l2.132-1.463c-1.526 6.649-4.65 11.179-8.803 14.106C23.406 33.632 17.604 35 11.052 35H8V6H6v35a1 1 0 0 0 1 1h35v-2H8v-3h3.052c6.806 0 13.06-1.419 17.996-4.898 4.633-3.265 8.009-8.279 9.622-15.39Zm-23.985 3.113a.302.302 0 0 0 .01.02c1.08.107 1.63.93 1.801 1.237.225.4.339.828.403 1.128.048.228.085.466.112.703.788.084 1.843.087 2.989.087 1.184 0 2.27-.003 3.066-.096a9.756 9.756 0 0 1 .516-1.62 4.89 4.89 0 0 1 .13-.285 2.102 2.102 0 0 1 .611-.754c.074-.056.333-.252.733-.351l.006-.003a.703.703 0 0 0 .16-.095.374.374 0 0 0 .103-.12c.018-.035.06-.128.06-.328 0-1.484.657-2.43.968-2.877.051-.074.093-.135.12-.181.174-.292.527-.931.527-3.047 0-1.702-.756-2.933-1.976-3.806C23.744 8.522 21.926 8 20 8c-1.926 0-3.745.522-5.024 1.437-1.22.873-1.976 2.104-1.976 3.806 0 2.116.353 2.755.526 3.047.028.046.07.107.121.18.31.447.968 1.394.968 2.878 0 .28.047.423.07.477Zm-.224 2.01c-.461 0-1.846-.453-1.846-2.487 0-.805-.252-1.186-.558-1.646C11.59 17 11 16.112 11 13.243c0-9.657 18-9.657 18 0 0 2.87-.59 3.757-1.057 4.46-.306.46-.558.84-.558 1.645 0 2.035-1.808 2.487-1.847 2.487-.038 0-.615 1.356-.615 2.26C24.923 25 22.308 25 20 25s-4.923 0-4.923-.904c0-.905-.154-2.261-.616-2.261ZM19 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm3.965 2.215a2.107 2.107 0 1 0-.004-4.213 2.107 2.107 0 0 0 .004 4.213Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="chart-death-rate-decreasing_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartDeathRateDecreasing);
export default ForwardRef;
