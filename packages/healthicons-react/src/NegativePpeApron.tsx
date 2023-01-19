import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgNegativePpeApron = (
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
        d="M48 0H0v48h48V0ZM19.428 7.027A6 6 0 0 0 14 13v12a2 2 0 0 0 2 2h2v12l2.838.946a10 10 0 0 0 6.324 0L30 39V27h2a2 2 0 0 0 2-2V13a6 6 0 0 0-5.428-5.973 5.001 5.001 0 0 1-9.144 0ZM19 25v-2h10v2H19Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNegativePpeApron);
export default ForwardRef;
