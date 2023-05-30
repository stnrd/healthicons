import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgForest = (
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
      <g clipPath="url(#forest_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24 18c0 6.177-3.5 11.264-8 11.927V39h16v-8.954h-4.727a3.273 3.273 0 0 1-1.468-6.199 4.092 4.092 0 0 1 2.411-4.968 4.909 4.909 0 1 1 9.568 0 4.092 4.092 0 0 1 2.411 4.968 3.273 3.273 0 0 1-1.468 6.199H34V39h6.5a1.5 1.5 0 0 1 0 3h-33a1.5 1.5 0 0 1 0-3H14v-9.073C9.5 29.264 6 24.177 6 18c0-6.627 4.03-12 9-12s9 5.373 9 12Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="forest_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgForest);
export default ForwardRef;
