import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgEye = (
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
        d="M48 0H0v48h48V0ZM15.086 15.966c-3.66 1.659-6.512 4.095-8.391 6.222a2.709 2.709 0 0 0 0 3.624c1.879 2.127 4.73 4.563 8.391 6.222A11.956 11.956 0 0 1 12 24c0-3.09 1.168-5.907 3.086-8.034Zm8.736-3.965c-8.74.092-15.218 5.005-18.626 8.863a4.709 4.709 0 0 0 0 6.272c3.408 3.858 9.885 8.771 18.626 8.863L24 36h.07c8.866 0 15.433-4.97 18.873-8.864a4.709 4.709 0 0 0 0-6.272C39.503 16.97 32.936 12 24.07 12H24l-.178.001Zm.025 2 .181-.001c5.51.015 9.972 4.487 9.972 10s-4.462 9.985-9.972 10l-.181-.001C18.394 33.917 14 29.472 14 24s4.395-9.917 9.847-9.999Zm8.971 18.138A11.957 11.957 0 0 0 36 24c0-3.14-1.207-6-3.182-8.139 3.774 1.66 6.707 4.155 8.626 6.327a2.709 2.709 0 0 1 0 3.624c-1.919 2.172-4.852 4.667-8.626 6.327ZM30.07 24a6 6 0 1 1-3.413-5.415 2 2 0 1 0 2.828 2.828c.375.784.585 1.66.585 2.587Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgEye);
export default ForwardRef;
