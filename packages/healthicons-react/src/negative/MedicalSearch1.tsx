import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalSearch1 = (
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
      <g clipPath="url(#medical_search-1_svg__a)" fill="#000">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 20a6.968 6.968 0 0 0-5 2.101A6.977 6.977 0 0 0 14 27c0 1.907.763 3.636 2 4.899l.003.003.047.048A6.978 6.978 0 0 0 21 34a7 7 0 0 0 0-14Zm0 12c.711 0 1.387-.148 2-.416v-9.168A5 5 0 1 0 21 32Z"
        />
        <path d="M18 11.688a1.5 1.5 0 0 0 1 1.414V18h-6v-4.898a1.5 1.5 0 0 0 1-1.415V9h4v2.688Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM11 4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v2.273a1.5 1.5 0 0 0-1 1.415V39a5.002 5.002 0 0 0 10 0v-3a8.962 8.962 0 0 0 5.618-1.968l2.45 2.45a2 2 0 0 0 .518 1.932l5 5a2 2 0 1 0 2.828-2.828l-5-5a2 2 0 0 0-1.932-.518l-2.45-2.45A9 9 0 0 0 21 18v-5.313a1.5 1.5 0 0 0-1-1.414V9h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H11Z"
        />
      </g>
      <defs>
        <clipPath id="medical_search-1_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicalSearch1);
export default ForwardRef;
