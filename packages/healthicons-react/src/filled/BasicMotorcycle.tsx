import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBasicMotorcycle = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.416 10.598A1 1 0 0 0 28.5 10H23v2h4.847l4.665 10.627a.997.997 0 0 0-.288.242l-6.2 7.631h-1.936L22.7 28H25a3 3 0 0 0 3-3H17.5a1.5 1.5 0 0 0 0 3h2.912l1.389 2.5h-4.877A6.502 6.502 0 0 0 4 31.5a6.5 6.5 0 0 0 12.924 1H26.5a1 1 0 0 0 .776-.37l6.108-7.517.618 1.407a6.5 6.5 0 1 0 1.831-.805l-6.417-14.617ZM10.5 28a3.502 3.502 0 0 1 3.355 2.5H10.5a1 1 0 1 0 0 2h3.355A3.502 3.502 0 0 1 7 31.5a3.5 3.5 0 0 1 3.5-3.5ZM34 31.5c0-1.07.48-2.027 1.236-2.67l1.348 3.072a1 1 0 0 0 1.832-.804l-1.349-3.072A3.5 3.5 0 1 1 34 31.5Z"
        fill="#000"
      />
      <path
        d="M28.026 17.052a.094.094 0 0 0-.084-.052h-4.257c-3.142 0-5.447 2.952-4.685 6h10.382a1 1 0 0 0 .894-1.447l-2.25-4.501ZM7 18a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h9.42a1 1 0 0 0 .78-1.625l-1.199-1.498A5 5 0 0 0 12.097 18H7ZM34 16.5l6.067-2.5.933 6-6.067-1L34 16.5Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBasicMotorcycle);
export default ForwardRef;
