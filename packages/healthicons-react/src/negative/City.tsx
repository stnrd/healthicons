import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCity = (
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
      <g clipPath="url(#city_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM9 42a1 1 0 1 0 0 2h30a1 1 0 1 0 0-2h-1V25a1 1 0 0 0-1-1h-4V10L17 4v16h-2v-7h-2v7h-2a1 1 0 0 0-1 1v21H9Zm3-20v20h5V22h-5Zm24 20h-2v-2h-3v2h-2V26h7v16ZM22 13h-2v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-10 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-6 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-10 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-4 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-4 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm7-7h3v-2h-3v2Zm3 4h-3v-2h3v2Zm-3 4h3v-2h-3v2Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="city_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCity);
export default ForwardRef;
