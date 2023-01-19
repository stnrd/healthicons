import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledOverweight = (
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
        d="M24 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm12.56 4.08a2 2 0 1 1-1.12 3.84 68.905 68.905 0 0 0-3.097-.83l.048.148c1.308 4.077 2.637 8.22.426 11.79L30.45 42.444A2 2 0 0 1 26.5 42v-6.07c-.796.07-1.624.07-2.5.07-.694 0-1.358 0-2-.035V42a2 2 0 0 1-3.95.443l-2.14-9.414c-3.19-3.786-1.733-8.327-.301-12.79l.037-.116c-.982.232-2.014.5-3.111.804a2 2 0 0 1-1.07-3.854C16.23 15.75 20.08 15.018 23.991 15c3.917-.017 7.777.683 12.569 2.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledOverweight);
export default ForwardRef;
