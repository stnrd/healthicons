import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeMicroscope = (
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
      <path
        fill="#333"
        fillRule="evenodd"
        d="M0 0h48v48H0V0Zm22.244 9.152a3.025 3.025 0 0 1 3.548 1.352l4.523 7.777a2.977 2.977 0 0 1-1.095 4.085l-.848.486.677 1.309-2.674 1.362-.61-1.177-.666.382a3.023 3.023 0 0 1-4.111-1.101l-2.922-5.024c-2.563 1.474-4.33 3.12-5.278 5.002-.798 1.584-1.06 3.426-.62 5.637A9.955 9.955 0 0 1 17 28c3.27 0 6.173 1.57 7.997 3.996l-6.508 3.667.993 1.736 6.514-3.67-.992-1.737 12.08-6.807.992 1.736-12.042 6.786A10.052 10.052 0 0 1 26.8 40H40a1 1 0 1 1 0 2H7.832A9.966 9.966 0 0 1 7 38a9.976 9.976 0 0 1 3.404-7.516c-.762-2.927-.546-5.51.597-7.779 1.186-2.353 3.306-4.246 6.06-5.831l-.596-1.024a2.978 2.978 0 0 1 .253-3.368l-1.062-1.838 1.509-.859-1.241-2.227 2.63-1.444 1.219 2.188 1.49-.848.98 1.698Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeMicroscope);
export default ForwardRef;
