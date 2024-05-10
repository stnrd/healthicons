import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDefault = (
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
      <g clipPath="url(#default_svg__a)" fill="#000">
        <path d="M13 13a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H13ZM13 18a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H13ZM12 24a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1ZM13 28a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5ZM35.981 30.293a1 1 0 0 0-1.414 0l-.791.79 1.414 1.415.791-.79a1 1 0 0 0 0-1.415ZM33.069 31.79 28 36.86v1.414h1.414l5.07-5.069-1.415-1.414Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm8 9v26a3 3 0 0 0 3 3h11.832A9.966 9.966 0 0 1 22 34c0-5.523 4.477-10 10-10 .685 0 1.354.069 2 .2V9a3 3 0 0 0-3-3H11a3 3 0 0 0-3 3Zm32 25a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        />
      </g>
      <defs>
        <clipPath id="default_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDefault);
export default ForwardRef;
