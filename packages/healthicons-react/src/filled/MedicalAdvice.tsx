import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMedicalAdvice = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 14c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10h-9a1 1 0 0 1-1-1v-9ZM7.778 9A2.783 2.783 0 0 0 5 11.778C5 29.023 18.977 43 36.222 43A2.783 2.783 0 0 0 39 40.222v-6.204a2.783 2.783 0 0 0-2.778-2.778 19.28 19.28 0 0 1-6.028-.961 2.768 2.768 0 0 0-2.839.667l-3.389 3.389a25.94 25.94 0 0 1-10.302-10.3l3.39-3.39a2.784 2.784 0 0 0 .691-2.82l-.002-.007-.002-.007a19.198 19.198 0 0 1-.963-6.033A2.783 2.783 0 0 0 14 9H7.778ZM33 19v-4h-4v-2h4V9h2v4h4v2h-4v4h-2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMedicalAdvice);
export default ForwardRef;
