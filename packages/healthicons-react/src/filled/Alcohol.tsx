import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAlcohol = (
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
        d="M19.5 5a1 1 0 0 0-1-1H16a1 1 0 0 0-1 1v12.182a.715.715 0 0 1-.237.531A14.39 14.39 0 0 0 10 28.408v13.384c0 1.22.989 2.208 2.208 2.208h9.435A2.356 2.356 0 0 0 24 41.644V28.063c0-3.882-1.542-7.605-4.287-10.35a.727.727 0 0 1-.213-.514V5ZM12 29h10v8H12v-8Zm23.639-5H28.36L29 18H35l.638 6ZM27.2 16h9.6l1.013 9.536A5.848 5.848 0 0 1 33 31.916V42h3a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h3V31.915a5.848 5.848 0 0 1-4.813-6.379L27.2 16Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAlcohol);
export default ForwardRef;
