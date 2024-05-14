import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgD = (
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
        d="M11 12a3 3 0 0 1 3-3h8c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15h-8a3 3 0 0 1-3-3V12Zm3-1a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h8c7.18 0 13-5.82 13-13s-5.82-13-13-13h-8Zm1 3a1 1 0 0 1 1-1h6c6.075 0 11 4.925 11 11s-4.925 11-11 11h-6a1 1 0 0 1-1-1V14Zm2 1v18h5a9 9 0 1 0 0-18h-5Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgD);
export default ForwardRef;
