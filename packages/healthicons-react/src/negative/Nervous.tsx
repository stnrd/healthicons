import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgNervous = (
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
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#nervous_svg__a)" fill="#000">
        <path d="M17 33a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1ZM18 29a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H18Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 40c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Zm-10-8.5a4.5 4.5 0 0 1 4.5-4.5h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1-4.5-4.5ZM20 21c0 2.21-1.12 4-2.5 4S15 23.21 15 21s1.12-4 2.5-4 2.5 1.79 2.5 4Zm13 0c0 2.21-1.12 4-2.5 4S28 23.21 28 21s1.12-4 2.5-4 2.5 1.79 2.5 4Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z"
        />
      </g>
      <defs>
        <clipPath id="nervous_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNervous);
export default ForwardRef;
