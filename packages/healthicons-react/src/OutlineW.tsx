import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineW = (
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
        d="M11.507 9.04a3 3 0 0 0-2.466 3.453l4 24a3 3 0 0 0 5.564.995L24 28.046l5.395 9.442a3 3 0 0 0 5.564-.995l4-24a3 3 0 0 0-5.918-.986l-2.615 15.69-3.821-6.686a3 3 0 0 0-5.21 0l-3.82 6.687-2.616-15.691a3 3 0 0 0-3.452-2.466Zm-.493 3.124a1 1 0 0 1 1.972-.329l3.077 18.461a1 1 0 0 0 1.855.332l5.214-9.124a1 1 0 0 1 1.736 0l5.214 9.124a1 1 0 0 0 1.855-.332l3.077-18.46a1 1 0 0 1 1.972.328l-4 24a1 1 0 0 1-1.854.332l-6.264-10.961a1 1 0 0 0-1.736 0l-6.264 10.96a1 1 0 0 1-1.854-.33l-4-24Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineW);
export default ForwardRef;
