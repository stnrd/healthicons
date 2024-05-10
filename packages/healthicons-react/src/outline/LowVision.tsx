import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgLowVision = (
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
        d="M24 14c-8.093 0-14.159 4.548-17.375 8.188a2.709 2.709 0 0 0 0 3.624C9.841 29.452 15.907 34 24 34s14.159-4.548 17.375-8.188a2.709 2.709 0 0 0 0-3.624C38.159 18.548 32.093 14 24 14ZM5.126 20.864C8.566 16.97 15.134 12 24 12s15.434 4.97 18.874 8.864a4.709 4.709 0 0 1 0 6.272C39.434 31.03 32.866 36 24 36S8.566 31.03 5.126 27.136a4.709 4.709 0 0 1 0-6.272Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.05 16.907c-3.918-3.893-10.25-3.873-14.143.044l-1.419-1.41c4.672-4.7 12.27-4.724 16.97-.053 4.702 4.672 4.725 12.27.054 16.97l-1.419-1.409c3.893-3.917 3.873-10.249-.044-14.142Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.293 9.293a1 1 0 0 1 1.414 0l28 28a1 1 0 0 1-1.414 1.414l-28-28a1 1 0 0 1 0-1.414Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.415 21.413a1.994 1.994 0 0 1-2.002.5 4.002 4.002 0 0 1-.606 4.937l1.403 1.425a6.002 6.002 0 0 0 1.205-6.862Zm-2.828-2.829a6.002 6.002 0 0 0-6.797 1.141l1.403 1.425a4.002 4.002 0 0 1 4.894-.563 1.998 1.998 0 0 1 .5-2.003Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 19a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM12 16a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1ZM7 28a1 1 0 0 1 1-1h20a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1ZM12 32a1 1 0 0 1 1-1h19a1 1 0 0 1 0 2H13a1 1 0 0 1-1-1ZM7 20a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1ZM5 24a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgLowVision);
export default ForwardRef;
