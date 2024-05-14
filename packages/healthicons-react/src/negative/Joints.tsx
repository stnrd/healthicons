import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgJoints = (
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
      <g clipPath="url(#joints_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20 5a1 1 0 1 0-2 0v2.024C11.009 9.495 6 16.163 6 24s5.009 14.505 12 16.976V43a1 1 0 1 0 2 0v-8.343a4 4 0 0 0-1.172-2.829l-.503-.503a3.287 3.287 0 0 1 3.794-5.265l.243.12a3.664 3.664 0 0 0 3.276 0l.243-.12a3.287 3.287 0 0 1 3.794 5.265l-.503.503A4 4 0 0 0 28 34.657V43a1 1 0 1 0 2 0v-2.024C36.991 38.505 42 31.837 42 24S36.991 9.495 30 7.024V5a1 1 0 1 0-2 0v8.343a4 4 0 0 0 1.172 2.829l.503.503a3.287 3.287 0 0 1-3.794 5.265l-.243-.12a3.663 3.663 0 0 0-3.276 0l-.243.12a3.287 3.287 0 0 1-3.794-5.265l.503-.503A4 4 0 0 0 20 13.343V5Z"
        />
      </g>
      <defs>
        <clipPath id="joints_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgJoints);
export default ForwardRef;
