import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHomeAlt = (
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
        d="M41.708 25.794 24.058 8.086 6.294 25.792a1 1 0 1 0 1.412 1.416L10 24.922V39a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-8.74a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V39a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V24.907l2.292 2.3a1 1 0 1 0 1.416-1.413ZM36 22.9 24.053 10.914 12 22.928V38h7v-7.74a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3V38h7V22.9Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHomeAlt);
export default ForwardRef;
