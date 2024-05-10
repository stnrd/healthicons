import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlertCircle = (
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
      <g clipPath="url(#alert_circle_svg__a)" fill="#000">
        <path d="M24 11a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0V13a2 2 0 0 1 2-2ZM26 35a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 48h48V0H0v48ZM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4Z"
        />
      </g>
      <defs>
        <clipPath id="alert_circle_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlertCircle);
export default ForwardRef;
