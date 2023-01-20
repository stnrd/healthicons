import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPills2 = (
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
        d="M48 0H0v48h48V0ZM26 16c0 5.523-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6s10 4.477 10 10Zm-5.153-1.997a1 1 0 0 1-.543 1.305l-7.845 3.233a1 1 0 1 1-.763-1.849l7.846-3.233a1 1 0 0 1 1.305.544ZM42 32c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-4.89 1.175a1 1 0 0 1-1.2.75l-8.269-1.901a1 1 0 1 1 .448-1.95l8.27 1.902a1 1 0 0 1 .75 1.199Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPills2);
export default ForwardRef;
