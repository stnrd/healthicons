import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHazardous = (
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
      <g clipPath="url(#hazardous_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM16.084 37.44 20.3 30a6.046 6.046 0 0 0 3.7 1.25A6.046 6.046 0 0 0 27.7 30l4.215 7.44a.638.638 0 0 1 .06.495.661.661 0 0 1-.317.393c-4.664 2.61-10.65 2.61-15.318 0a.662.662 0 0 1-.315-.393.64.64 0 0 1 .06-.495Zm4.766-19.716-4.336-7.371a.64.64 0 0 0-.398-.299.662.662 0 0 0-.499.077c-4.593 2.736-7.587 7.92-7.659 13.265a.661.661 0 0 0 .183.471c.12.125.284.195.458.196l8.55.07a6.047 6.047 0 0 1 .769-3.829 6.046 6.046 0 0 1 2.932-2.58ZM39.4 24.206l-8.551.07a6.046 6.046 0 0 0-.768-3.83 6.047 6.047 0 0 0-2.932-2.58l4.336-7.37a.638.638 0 0 1 .399-.299.662.662 0 0 1 .498.078c4.593 2.734 7.586 7.919 7.66 13.265a.662.662 0 0 1-.184.47.64.64 0 0 1-.458.196ZM29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm13 0c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Zm2 0c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20Z"
        />
      </g>
      <defs>
        <clipPath id="hazardous_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHazardous);
export default ForwardRef;
