import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgColdChain = (
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
        d="M33.965 42.95a8 8 0 0 1-8.914-13.236A5.055 5.055 0 0 1 25 29V9a5 5 0 0 1 10 0v20c0 .242-.017.481-.05.714A7.986 7.986 0 0 1 38 36a7.995 7.995 0 0 1-3.787 6.802l-.198.198-.05-.05Zm-7.676-11.665.006-.005 8.425 8.425a6.032 6.032 0 0 1-.557.616l-8.484-8.484c.19-.198.394-.382.61-.552Zm-1.755 2.235c-.125.276-.23.563-.313.858l7.4 7.4c.296-.082.583-.188.859-.313l-7.946-7.945Zm-.436 3.563a6.006 6.006 0 0 0 4.819 4.82l-4.82-4.82Zm11.607.78-8.7-8.702A3.076 3.076 0 0 1 27 29v-1.014l8.93 8.93c-.05.325-.125.641-.225.946Zm-.16-4.161L27 25.157v-1.172l5.963 5.964a2 2 0 0 0 .748 1.336 6.018 6.018 0 0 1 1.834 2.417ZM30 6a3 3 0 0 0-3 3v12.018c.238.02.472.056.697.097a23.257 23.257 0 0 1 1.607.38l.35.091c1.09.277 2.203.521 3.346.5V20h-2a1 1 0 1 1 0-2h2v-2h-2a1 1 0 1 1 0-2h2v-2h-2a1 1 0 1 1 0-2h2V9a3 3 0 0 0-3-3Zm3 21.157-3.564-3.564c.464.116.963.23 1.491.32L33 25.985v1.172Z"
      />
      <path d="M16.33 12a1 1 0 1 0-2 0v3.268l-2.83-1.634a1 1 0 1 0-1 1.732L13.33 17l-2.83 1.634a1 1 0 1 0 1 1.732l2.83-1.634V22a1 1 0 0 0 2 0v-3.268l2.83 1.634a1 1 0 1 0 1-1.732L17.33 17l2.83-1.634a1 1 0 1 0-1-1.732l-2.83 1.634V12Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgColdChain);
export default ForwardRef;
