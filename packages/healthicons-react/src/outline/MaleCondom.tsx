import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMaleCondom = (
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
        d="m31.262 9.99.733-2.85L27.886 6 7.09 18.517 6 22.787l2.733.764-.732 2.85 2.734.763-.733 2.85 2.734.764-.733 2.85 2.734.763-.733 2.85 2.734.764-.733 2.85 4.1 1.145 20.788-12.512L42 25.208l-2.733-.764.732-2.85-2.734-.763.733-2.85-2.734-.764.733-2.85-2.734-.763.733-2.85-2.734-.764Zm.31 2.163-2.734-.764.731-2.846-1.389-.386-19.355 11.65-.403 1.58 2.736.765-.732 2.85 2.733.763-.732 2.85 2.733.764-.732 2.85 2.733.763-.732 2.85 2.733.764-.732 2.85 1.383.386 19.348-11.646.411-1.59-2.73-.763.732-2.85-2.733-.763.732-2.85-2.733-.764.732-2.85-2.733-.763.732-2.85Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 31a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMaleCondom);
export default ForwardRef;
