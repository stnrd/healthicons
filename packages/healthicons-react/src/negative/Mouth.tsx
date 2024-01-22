import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMouth = (
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
      <g clipPath="url(#mouth_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 14.182C15.2 10.254 7 18.545 4 24c3 4.364 11.2 12 20 12s17-7.636 20-12c-3-5.455-11-14.182-20-9.818ZM24 21c-5.816 0-11.585 1.473-14.69 2.523-.445.15-.43.762.018.904C12.318 25.375 17.92 27 24 27c5.98 0 11.5-1.66 14.525-2.57l.025-.008c.461-.138.487-.784.03-.936C35.45 22.439 29.747 21 24 21Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="mouth_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMouth);
export default ForwardRef;
