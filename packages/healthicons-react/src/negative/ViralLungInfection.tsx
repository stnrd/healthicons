import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgViralLungInfection = (
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
      <g clipPath="url(#viral_lung_infection_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.012 14.503l.005-6.498v-.004h-.011V6l-1-.001h-1v16.492c-.002 1.397-.566 1.94-1.005 2.197-.046.026-.091.05-.137.073a65.476 65.476 0 0 1 .004-1.054c.037-3.295.111-9.712-4.967-9.717-6.956-.005-11.945 24.277-8.965 26.758 2.979 2.48 8.943.998 11.926-1.973 2.386-2.376 2.21-7.9 2.064-11.919a4.261 4.261 0 0 0 1.081-.44c.356-.208.699-.481.996-.833.297.352.639.627.994.835.386.225.765.36 1.084.442-.154 4.043-.355 9.64 2.051 12.043 2.993 2.991 8.984 4.49 11.982 2.002 1.675-1.39.862-9.622-1.401-16.618A9.974 9.974 0 0 1 34 25a9.997 9.997 0 0 1-8.724-5.109c-.159 1.401-.145 2.798-.134 3.868.002.253.005.488.005.7l-.002.306a2.093 2.093 0 0 1-.138-.073c-.44-.257-1.003-.801-1.001-2.198l.005-7.014a10.185 10.185 0 0 1 .001-.977ZM35 19.9a4.972 4.972 0 0 0 1.757-.728l.829.828A1 1 0 0 0 39 21.414L40.414 20A1 1 0 0 0 39 18.586l-.828-.829A4.972 4.972 0 0 0 38.9 16H40a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0h-1.1a4.972 4.972 0 0 0-.728-1.757l.828-.829A1 1 0 1 0 40.414 10L39 8.586A1 1 0 1 0 37.586 10l-.829.828A4.972 4.972 0 0 0 35 10.1V9a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2v1.1c-.638.13-1.233.38-1.757.728L30.414 10A1 1 0 0 0 29 8.586l-.698.698-.01.009-.009.01-.697.697A1 1 0 0 0 29 11.414l.828.829A4.972 4.972 0 0 0 29.1 14H28a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0h1.1c.13.638.38 1.233.728 1.757l-.828.829A1 1 0 1 0 27.586 20L29 21.414A1 1 0 0 0 30.414 20l.829-.828A4.972 4.972 0 0 0 33 19.9V21a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2v-1.1Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="viral_lung_infection_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgViralLungInfection);
export default ForwardRef;
