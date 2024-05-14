import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgImplant = (
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
        d="M20 10a4 4 0 0 1 8 0v28a4 4 0 0 1-8 0V10Zm4-2a2 2 0 0 0-2 2v28a2 2 0 1 0 4 0V10a2 2 0 0 0-2-2Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgImplant);
export default ForwardRef;
