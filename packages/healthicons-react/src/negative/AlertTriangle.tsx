import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlertTriangle = (
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
      <g clipPath="url(#alert_triangle_svg__a)" fill="#000">
        <path d="M24 18a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V20a2 2 0 0 0-2-2ZM22 35.966C22 34.88 22.88 34 23.966 34h.068a1.966 1.966 0 1 1 0 3.933h-.067A1.966 1.966 0 0 1 22 35.966Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.9 6.849a1 1 0 0 0-1.8 0L6.7 40.563A1 1 0 0 0 7.598 42h32.803a1 1 0 0 0 .899-1.437L24.899 6.849Z"
        />
      </g>
      <defs>
        <clipPath id="alert_triangle_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlertTriangle);
export default ForwardRef;
