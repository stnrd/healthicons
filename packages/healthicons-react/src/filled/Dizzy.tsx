import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDizzy = (
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
      <path d="M27.293 17.293a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L31.914 20.5l1.793 1.793a1 1 0 0 1-1.414 1.414L30.5 21.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1.002 1.002 0 0 1 0-1.414ZM14.293 17.293a1 1 0 0 1 1.414 0l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L18.914 20.5l1.793 1.793a1.002 1.002 0 0 1 0 1.414 1 1 0 0 1-1.414 0L17.5 21.914l-1.792 1.792v.001a1 1 0 0 1-1.415-1.414l1.793-1.793-1.793-1.793a1.002 1.002 0 0 1 0-1.414ZM31 32c0 3.314-3.134 4-7 4s-7-.686-7-4 3.134-6 7-6 7 2.686 7 6Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Zm0-2c8.837 0 16-7.163 16-16S32.837 8 24 8 8 15.163 8 24s7.163 16 16 16Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDizzy);
export default ForwardRef;
