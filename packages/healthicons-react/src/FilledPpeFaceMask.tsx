import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPpeFaceMask = (
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
        d="M23.706 11.044a.999.999 0 0 1 .588 0l13 4A1 1 0 0 1 38 16v1h1a5 5 0 0 1 5 5v4a5 5 0 0 1-5 5h-2.456a8.99 8.99 0 0 1-4.897 3.693l-7.353 2.263a1.001 1.001 0 0 1-.588 0l-7.353-2.263A8.99 8.99 0 0 1 11.456 31H9a5 5 0 0 1-5-5v-4a5 5 0 0 1 5-5h1v-1a1 1 0 0 1 .706-.956l13-4ZM10 26.091c0 1.01.168 1.99.482 2.909H9a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1v7.091ZM37.518 29H39a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1v7.091c0 1.01-.168 1.99-.482 2.909ZM30 21H18v-2h12v2Zm0 6H18v-2h12v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPpeFaceMask);
export default ForwardRef;
