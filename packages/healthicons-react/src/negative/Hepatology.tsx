import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHepatology = (
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
      <g
        clipPath="url(#hepatology_svg__a)"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#000"
      >
        <path d="M48 0H0v48h48V0ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z" />
        <path d="M23.062 13.003a9.48 9.48 0 0 0-.99 2.024c-.289.827-.427 1.57-.494 2.109a8.434 8.434 0 0 0-.06.895v.027c0 .001 0 .002 1-.018l1-.02v.003V17.996c0-.024 0-.066.003-.121.005-.112.016-.282.043-.495a8.174 8.174 0 0 1 .396-1.691 7.194 7.194 0 0 1 1.48-2.502c1.38.228 1.94.624 2.41.956.446.316.81.573 1.718.573.937 0 2.25-.33 3.562-.659 1.969-.494 3.937-.988 4.64-.37 1.172 1.03-2.343 8.582-5.859 8.582-1.809 0-2.894 1.526-3.947 3.008-.993 1.397-1.957 2.754-3.474 2.754-1.022 0-1.793.265-2.478.622V23.82c0-.241.118-.481.354-.688.255-.222.526-.298.633-.298v-2c-.688 0-1.41.32-1.95.793-.559.49-1.037 1.243-1.037 2.193V24.404c-.916.369-2.316.546-3.841-.653-2.659-2.088-4.178.836-1.9 2.506 1.578 1.157 4.248.712 5.741.329V29.847c-.703.376-1.493.66-2.552.66-1.282 0-1.705 1.207-2.155 2.489C14.795 34.449 14.25 36 12.382 36c-3.515 0-2.648-12.732-.554-17.66C13.922 13.41 16.787 13 22.646 13c.143 0 .282.001.416.003Z" />
        <path d="M20.012 42.5V30h2v12.5h-2Z" />
      </g>
      <defs>
        <clipPath id="hepatology_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHepatology);
export default ForwardRef;
