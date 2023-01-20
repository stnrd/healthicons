import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgElectricity = (
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
        d="M13.07 26.285c.962 1.176 3.41 5.533 3.93 7.715h14c.52-2.18 2.965-6.537 3.927-7.712a13.568 13.568 0 0 0 2.982-7.015 13.47 13.47 0 0 0-1.289-7.495 13.813 13.813 0 0 0-5.164-5.671A14.215 14.215 0 0 0 24.002 4c-2.637 0-5.221.73-7.454 2.105a13.814 13.814 0 0 0-5.166 5.67 13.47 13.47 0 0 0-1.292 7.493c.299 2.567 1.332 5 2.98 7.017ZM25 12l-6 9h4v6l6-9h-4v-6Z"
        fill="#333"
      />
      <path
        d="M17 37a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1ZM31 40H17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgElectricity);
export default ForwardRef;
