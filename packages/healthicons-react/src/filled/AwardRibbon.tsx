import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAwardRibbon = (
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
      <path d="M13 20c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 34.391C36.328 31.794 40 26.326 40 20c0-8.837-7.163-16-16-16-8.836 0-16 7.163-16 16 0 6.327 3.672 11.796 9.001 14.392V43a1 1 0 0 0 1.555.832L24 40.202l5.445 3.63A1 1 0 0 0 31 43v-8.609ZM24 34c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14 6.268 14 14 14Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAwardRibbon);
export default ForwardRef;
