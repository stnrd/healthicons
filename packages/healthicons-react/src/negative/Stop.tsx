import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStop = (
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
      <g clipPath="url(#stop_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm24 5.905c9.994 0 18.095 8.101 18.095 18.095 0 9.994-8.101 18.095-18.095 18.095-9.994 0-18.095-8.101-18.095-18.095 0-9.994 8.101-18.095 18.095-18.095ZM44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20 20-8.954 20-20Zm-14 1.14V12.5a1.5 1.5 0 0 0-3 0V23h-2V9.5a1.5 1.5 0 0 0-3 0V23h-2V12.5a1.5 1.5 0 0 0-3 0V25h-2v-8.5a1.5 1.5 0 0 0-3 0V29.737a10.262 10.262 0 0 0 19.323 4.818l5.907-11.107a1.812 1.812 0 0 0-3.184-1.73l-2.172 3.909c-.501.902-1.874.546-1.874-.486Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="stop_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStop);
export default ForwardRef;
