import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativeTempleAlt = (
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
        d="M14 12.048h7v2h-7v-2Zm7 4h-5v2h5v-2Zm2 2v-2h2v2h-2Zm-2 2h-8v2h8v-2Zm2 2v-2h2v2h-2Zm-2 2h-7v2h7v-2Zm2 2v-2h2v2h-2Zm-12 2v2h10v-2H11Zm26 2v-2H27v2h10Zm-12-2V30h-2v-1.952h2Zm2-2h7v-2h-7v2Zm0-4h8v-2h-8v2Zm0-4h5v-2h-5v2Zm0-4h7v-2h-7v2Zm-2-2v2h-2v-2h2ZM35 36v-3.952H13V36h7v-1.952h8V36h7Zm-7 2v2h11v-2H28Zm-8 0v2H9v-2h11Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M48 0H0v48h48V0ZM35 10.048h-5.083a6.002 6.002 0 0 0-11.834 0H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v2h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1V36H8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12v.048h8V42h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3.952h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2v-2h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativeTempleAlt);
export default ForwardRef;
