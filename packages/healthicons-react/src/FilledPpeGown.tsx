import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPpeGown = (
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
        d="M30.363 4a5 5 0 0 1 4.977 4.526l1.447 15.19A2.988 2.988 0 0 1 36 26.04V30a1 1 0 0 1-1 1h-3v12a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V31h-3a1 1 0 0 1-1-1v-3.96a2.988 2.988 0 0 1-.787-2.324l1.447-15.19A5 5 0 0 1 17.637 4H21a3 3 0 0 0 6 0h3.363ZM34 29h-2v-2h2v2Zm-19.8-2H16v2h-2v-2h.2Zm2.8-2h14v-2H17v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPpeGown);
export default ForwardRef;
