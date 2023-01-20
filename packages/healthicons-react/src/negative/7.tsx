import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg7 = (
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
        d="M48 0H0v48h48V0ZM16 10a2 2 0 1 0 0 4h11.922a73.401 73.401 0 0 0-4.599 7.369c-2.42 4.444-4.613 9.602-5.302 14.343a2 2 0 0 0 3.958.576c.59-4.06 2.531-8.734 4.858-13.006 2.316-4.254 4.918-7.933 6.678-9.977A2 2 0 0 0 32 10H16Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(Svg7);
export default ForwardRef;
