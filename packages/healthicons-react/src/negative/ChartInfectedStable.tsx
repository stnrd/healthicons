import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChartInfectedStable = (
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
      <g clipPath="url(#chart-infected-stable_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24.712 20.45a6.474 6.474 0 0 1-3.212 1.474v1.087A1 1 0 0 1 21.35 25h-1.7a1 1 0 0 1-.15-1.989v-1.087a6.468 6.468 0 0 1-2.835-1.175l-.7.701.142.143a1 1 0 0 1-1.414 1.414l-1.7-1.7a1 1 0 0 1 1.414-1.414l.143.143.701-.701a6.468 6.468 0 0 1-1.175-2.835H12.99A1 1 0 0 1 11 16.35v-1.7a1 1 0 0 1 1.989-.15h1.087a6.468 6.468 0 0 1 1.175-2.835l-.701-.7-.143.142a1 1 0 0 1-1.414-1.414l1.7-1.7a1 1 0 1 1 1.414 1.414l-.143.143.701.701A6.466 6.466 0 0 1 19.5 9.076V7.99A1 1 0 0 1 19.65 6h1.7a1 1 0 0 1 .15 1.989v1.087a6.466 6.466 0 0 1 2.835 1.175l.7-.701-.142-.143a1 1 0 0 1 1.414-1.414l1.7 1.7a1 1 0 0 1-1.414 1.414l-.143-.143-.701.701c.6.82 1.013 1.786 1.175 2.835h1.087a1 1 0 0 1 1.989.15v1.7a1 1 0 0 1-1.989.15h-1.087a6.46 6.46 0 0 1-.905 2.436l1.248 1.133.176-.176a1 1 0 0 1 1.414 1.414l-1.7 1.7a1 1 0 0 1-1.414-1.414l.108-.108-1.14-1.034Zm-5.787 11.17c1.23-.405 2.6-.62 3.995-.62s2.764.215 3.994.62l3.673 1.212c2.336.77 4.9 1.168 7.493 1.168h1.286l-3.073 3.075a1 1 0 0 0 1.414 1.414l4.78-4.782a1 1 0 0 0 0-1.414l-4.78-4.782a1 1 0 0 0-1.414 1.414L39.367 32H38.08c-2.392 0-4.745-.368-6.867-1.068l-3.672-1.21A14.848 14.848 0 0 0 22.92 29c-1.595 0-3.176.245-4.621.721l-3.671 1.207c-2.052.676-4.318 1.043-6.628 1.067V6H6v35a1 1 0 0 0 1 1h35v-2H8v-6.005c2.51-.024 4.988-.42 7.252-1.167l3.673-1.207Z"
        />
      </g>
      <defs>
        <clipPath id="chart-infected-stable_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartInfectedStable);
export default ForwardRef;
