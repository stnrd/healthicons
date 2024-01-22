import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStarMedium = (
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
        d="M20.45 18.777 24 11.512l3.55 7.265.898-.44-.899.44c.289.59.849 1.004 1.503 1.1l7.946 1.167v.001a.031.031 0 0 1 .002.008l-.003.004-5.753 5.665a2.011 2.011 0 0 0-.57 1.77l1.358 7.998v.003l-7.1-3.77a1.986 1.986 0 0 0-1.864 0l-7.1 3.77v-.003l1.358-7.999a2.011 2.011 0 0 0-.57-1.77l-5.753-5.664-.003-.003c0-.003 0-.006.002-.009v-.002l7.946-1.166a1.996 1.996 0 0 0 1.503-1.1Z"
        fill="#000"
        stroke="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStarMedium);
export default ForwardRef;
