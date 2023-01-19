import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeAlertCircle = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <g fill="#333" clipPath="url(#negative_alert_circle_svg__a)">
        <path d="M24 11a2 2 0 0 1 2 2v14a2 2 0 1 1-4 0V13a2 2 0 0 1 2-2Zm2 24a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
        <path
          fillRule="evenodd"
          d="M0 48h48V0H0v48ZM24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="negative_alert_circle_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeAlertCircle);
export default ForwardRef;
