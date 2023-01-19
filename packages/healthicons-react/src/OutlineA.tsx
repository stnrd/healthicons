import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineA = (
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
        d="M21.23 10.846a3 3 0 0 1 5.539 0l7.479 17.95c.015.033.03.068.043.102l2.478 5.948a3 3 0 1 1-5.538 2.308L29.5 33h-11l-1.731 4.154a3 3 0 1 1-5.538-2.308l2.478-5.947a3.02 3.02 0 0 1 .043-.104l7.479-17.949ZM24 11a1 1 0 0 0-.923.615l-7.483 17.96-.01.02a1.021 1.021 0 0 0-.016.042l-.01.021-2.481 5.957a1 1 0 0 0 1.846.77l1.987-4.77a1 1 0 0 1 .923-.615h12.334a1 1 0 0 1 .923.615l1.987 4.77a1 1 0 0 0 1.846-.77l-2.482-5.957-.009-.021a.94.94 0 0 0-.01-.023l-.007-.019-.01-.02-7.482-17.96A1 1 0 0 0 24 11Zm0 5.2a1 1 0 0 1 .923.615l4.5 10.8A1 1 0 0 1 28.5 29h-9a1 1 0 0 1-.923-1.385l4.5-10.8A1 1 0 0 1 24 16.2ZM21 27h6l-3-7.2-3 7.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineA);
export default ForwardRef;
