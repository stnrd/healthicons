import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEyeglasses = (
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
        d="M8 19a2 2 0 0 1 2-2h8.7a2 2 0 0 1 1.992 2.19l-.572 6A2 2 0 0 1 18.13 27H10a2 2 0 0 1-2-2v-6Zm9 2.5c0 1.38-.895 2.5-2 2.5s-2-1.12-2-2.5.895-2.5 2-2.5 2 1.12 2 2.5ZM29.3 17a2 2 0 0 0-1.992 2.19l.572 6A2 2 0 0 0 29.87 27H38a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-8.7Zm3.7 7c1.105 0 2-1.12 2-2.5s-.895-2.5-2-2.5-2 1.12-2 2.5.895 2.5 2 2.5Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 0H0v48h48V0ZM24 40c6.326 0 11.795-3.672 14.392-9h2.196c-2.73 6.464-9.13 11-16.588 11S10.143 37.464 7.412 31h2.197c2.596 5.328 8.065 9 14.391 9Zm0-32c-4.576 0-8.703 1.92-11.619 5h-2.63C13.043 8.742 18.201 6 24 6c5.799 0 10.957 2.742 14.249 7h-2.63C32.703 9.92 28.576 8 24 8Zm-1.343 10.4c.047.317.058.645.026.98l-.572 6A4 4 0 0 1 18.13 29H10a4 4 0 0 1-4-4v-5H5v-5h13.7c1.224 0 2.31.546 3.04 1.4h4.52A3.986 3.986 0 0 1 29.3 15H43v5h-1v5a4 4 0 0 1-4 4h-8.13a4 4 0 0 1-3.981-3.62l-.572-6a4.015 4.015 0 0 1 .026-.98h-2.686Zm7.28 13.75a1 1 0 0 1-.588 1.287c-2.12.79-3.849 1.267-5.551 1.288-1.727.021-3.336-.426-5.226-1.321a1 1 0 0 1 .856-1.808c1.717.814 3.018 1.146 4.345 1.13 1.35-.017 2.818-.395 4.878-1.163a1 1 0 0 1 1.286.588Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEyeglasses);
export default ForwardRef;
