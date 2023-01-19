import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPneumonia = (
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
        d="M16.505 12.025c5.132 0 5.356 6.118 5.333 9.773.06-.026.12-.055.18-.088.25-.137.483-.334.658-.623.174-.288.324-.723.324-1.393V6.002h2v13.69c0 .67.15 1.105.325 1.393.175.289.408.485.658.622.046.026.093.05.14.07-.023-3.654.203-9.768 5.333-9.768 7.45 0 12.772 26.006 9.58 28.66-3.194 2.654-9.58 1.061-12.773-2.123-2.578-2.571-2.355-8.579-2.195-12.891.023-.634.045-1.23.057-1.774a4.385 4.385 0 0 1-1.107-.422A3.78 3.78 0 0 1 24 22.65a3.77 3.77 0 0 1-1.018.813 4.4 4.4 0 0 1-1.147.43c.011.546.034 1.144.057 1.778.16 4.313.383 10.321-2.195 12.892-3.193 3.185-9.579 4.777-12.772 2.123-3.193-2.654 2.129-28.66 9.58-28.66Zm17.537 4.973a2 2 0 1 1-3.998-.001 2 2 0 0 1 3.998.002Zm-20.04.005a2 2 0 1 0 4-.003 2 2 0 0 0-4 .003Zm-5.013 20a2 2 0 1 0 4-.003 2 2 0 0 0-4 .003Zm8.015-3.001a2 2 0 1 1-.004-4 2 2 0 0 1 .004 4Zm-7.002-5.999a2 2 0 1 0 4-.003 2 2 0 0 0-4 .003Zm7.002-3.001a2 2 0 1 1-.004-4 2 2 0 0 1 .004 4Zm20.022 13.995a2 2 0 1 0 .001-3.998 2 2 0 0 0-.001 3.998Zm-3.996-6.998a2 2 0 1 1-3.999-.002 2 2 0 0 1 3.999.002Zm3.003-2.002a2 2 0 1 0 .002-3.998 2 2 0 0 0-.002 3.998Zm-2.996-6.998a2 2 0 1 1-3.998-.002 2 2 0 0 1 3.998.002Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPneumonia);
export default ForwardRef;
