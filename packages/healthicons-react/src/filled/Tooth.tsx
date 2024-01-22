import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgTooth = (
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
        d="M20.96 9.281c-4.338-2.44-8.18-1.293-11.375 2.585-3.082 3.742-.98 10.488.53 15.338.36 1.156.687 2.205.902 3.079 1.115 4.54 2.183 7.37 4.616 9.418 1.205 1.014 2.572-.729 4.014-2.567 1.25-1.594 2.556-3.26 3.863-3.264 1.285-.004 2.571 1.66 3.804 3.254 1.423 1.84 2.775 3.59 3.973 2.577 1.86-1.57 2.703-2.722 3.725-5.956 1.113-3.527 2.912-7.745 4.342-12.607 1.006-3.42 1.126-6.904-1.773-10.265-4.14-4.8-9.877-2.32-12.548-.733l3.618 3.1a1 1 0 1 1-1.302 1.52L20.96 9.28Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgTooth);
export default ForwardRef;
