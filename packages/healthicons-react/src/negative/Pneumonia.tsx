import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPneumonia = (
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
        d="M0 0h48v48H0V0Zm16.505 12.025c5.132 0 5.356 6.118 5.333 9.773.06-.026.12-.055.18-.088.25-.137.483-.334.658-.623.174-.288.324-.723.324-1.393V6.002h2V19.691c0 .67.15 1.105.324 1.393.176.289.41.485.659.622.046.026.093.05.14.07-.023-3.654.202-9.768 5.333-9.768 7.45 0 12.772 26.006 9.58 28.66-3.194 2.654-9.58 1.061-12.773-2.123-2.578-2.571-2.355-8.579-2.195-12.891.023-.634.045-1.23.057-1.774a4.386 4.386 0 0 1-1.107-.422A3.782 3.782 0 0 1 24 22.65c-.315.358-.67.621-1.018.813a4.394 4.394 0 0 1-1.147.43c.011.546.034 1.144.057 1.778.16 4.313.383 10.321-2.195 12.892-3.193 3.185-9.58 4.777-12.772 2.123-3.193-2.654 2.129-28.66 9.58-28.66Zm-.531 6.914a2 2 0 1 1-.003-4 2 2 0 0 1 .003 4ZM8.989 36.945a2 2 0 1 0 4-.003 2 2 0 0 0-4 .003Zm7.997-3.007a2 2 0 1 1-.003-4 2 2 0 0 1 .003 4Zm-7.005-5.994a2 2 0 1 0 4-.003 2 2 0 0 0-4 .003Zm6.998-3.006a2 2 0 1 1-.003-4 2 2 0 0 1 .003 4Zm16.993-7.93a2 2 0 1 1-4 .004 2 2 0 0 1 4-.003Zm3.018 21.998a2 2 0 1 0-.003-4 2 2 0 0 0 .003 4Zm-4.006-6.997a2 2 0 1 1-4 .004 2 2 0 0 1 4-.004Zm2.999-2.002a2 2 0 1 0-.003-4 2 2 0 0 0 .003 4Zm-3.006-6.998a2 2 0 1 1-4 .004 2 2 0 0 1 4-.004Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPneumonia);
export default ForwardRef;
