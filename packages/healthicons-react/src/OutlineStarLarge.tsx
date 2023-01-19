import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineStarLarge = (
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
        d="m24 9.762-3.89 7.92a3.007 3.007 0 0 1-2.265 1.65l-8.717 1.273 6.314 6.185a3.015 3.015 0 0 1 .862 2.66l-1.489 8.722 7.782-4.111a3.003 3.003 0 0 1 2.806 0l7.782 4.11-1.489-8.72a3.015 3.015 0 0 1 .862-2.661l6.315-6.185-8.718-1.273a3.007 3.007 0 0 1-2.265-1.65L24 9.761Zm.903-2.698a1.005 1.005 0 0 0-1.806 0L18.315 16.8c-.147.298-.43.505-.759.553L6.864 18.914c-.826.121-1.156 1.141-.558 1.726l7.738 7.579c.237.232.346.567.29.895l-1.827 10.7c-.141.827.722 1.458 1.461 1.068l9.564-5.053c.294-.155.644-.155.938 0l9.564 5.053c.739.39 1.602-.24 1.461-1.067l-1.827-10.7a1.015 1.015 0 0 1 .29-.896l7.738-7.579c.597-.585.268-1.605-.558-1.726l-10.694-1.56a1.008 1.008 0 0 1-.758-.554l-4.782-9.736Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineStarLarge);
export default ForwardRef;
