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
      <path
        d="M19.65 6a1 1 0 0 0-.15 1.989v1.493a6.068 6.068 0 0 0-2.548 1.056l-.988-.988.143-.143a1 1 0 0 0-1.414-1.414l-1.7 1.7a1 1 0 0 0 1.414 1.414l.143-.143.988.988a6.067 6.067 0 0 0-1.056 2.548h-1.493a1 1 0 0 0-1.989.15v1.7a1 1 0 0 0 1.989.15h1.493a6.067 6.067 0 0 0 1.056 2.548l-.988.988-.143-.143a1 1 0 0 0-1.414 1.414l1.7 1.7a1 1 0 0 0 1.414-1.414l-.143-.143.988-.988c.742.532 1.609.902 2.548 1.056v1.493A1 1 0 0 0 19.65 25h1.7a1 1 0 0 0 .15-1.989v-1.493a6.078 6.078 0 0 0 3.022-1.432l1.364 1.364-.143.143a1 1 0 0 0 1.414 1.414l1.7-1.7a1 1 0 0 0-1.414-1.414l-.143.143-1.505-1.505a6.06 6.06 0 0 0 .723-2.031h1.493A1 1 0 0 0 30 16.35v-1.7a1 1 0 0 0-1.989-.15h-1.493a6.067 6.067 0 0 0-1.056-2.548l.988-.988.143.143a1 1 0 0 0 1.414-1.414l-1.7-1.7a1 1 0 1 0-1.414 1.414l.143.143-.988.988A6.068 6.068 0 0 0 21.5 9.482V7.989A1 1 0 0 0 21.35 6h-1.7Z"
        fill="#333"
      />
      <path
        d="M18.925 31.62c1.23-.405 2.6-.62 3.995-.62s2.764.215 3.995.62l3.672 1.212c2.336.77 4.9 1.168 7.493 1.168h1.286l-3.073 3.075a1 1 0 0 0 1.414 1.414l4.78-4.782a1 1 0 0 0 0-1.414l-4.78-4.782a1 1 0 0 0-1.414 1.414L39.367 32H38.08c-2.393 0-4.745-.368-6.867-1.068l-3.672-1.21A14.848 14.848 0 0 0 22.92 29a14.85 14.85 0 0 0-4.622.721l-3.671 1.207c-2.052.676-4.317 1.043-6.627 1.067V6H6v35a1 1 0 0 0 1 1h35v-2H8v-6.005c2.51-.024 4.989-.421 7.253-1.167l3.672-1.207Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChartInfectedStable);
export default ForwardRef;
