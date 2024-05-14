import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBurnUnit = (
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
        d="M9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Zm6.775 16.477c2.28-4.065 4.314-7.696 4.314-12.477 3.987 3.309 7.72 7.022 9.029 12.09l.228-.437c.646-1.236 1.5-2.872 1.984-4.653 2.816 8.683 3.333 16.334-6.33 21 .737-4.5.525-7.565-1.807-11.741-3.794 3.81-4.6 6.672-4.6 11.741-3.503-4.417-6.356-9.18-3.289-14.68l.471-.843Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBurnUnit);
export default ForwardRef;
