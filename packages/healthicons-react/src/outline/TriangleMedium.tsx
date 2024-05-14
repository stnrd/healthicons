import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTriangleMedium = (
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
        d="M24 8a1 1 0 0 1 .894.553l15 30A1 1 0 0 1 39 40H9a1 1 0 0 1-.894-1.447l15-30A1 1 0 0 1 24 8Zm0 3.236L10.618 38h26.764L24 11.236Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTriangleMedium);
export default ForwardRef;
