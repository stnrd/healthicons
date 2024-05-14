import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUnhealthyFood = (
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
        d="m31.228 4-1.21 4.64.068-1.01L24 10.541V6.648L17 8.79v3.62l-1.77-6.603-5.602 5.237 2.44 9.103c.115.06.223.137.317.228.83.803 1.629 1.532 2.4 2.189l-2.914-10.879 2.29-2.14 2.84 10.587v4.161c.683.482 1.348.9 2 1.25V10.27l3-.917V26.72c.759.178 1.51.259 2.261.241l1.006-14.81 2.59-1.24-1.061 15.624a12.88 12.88 0 0 0 2.467-1.082l2.327-8.687 2.84-.852-1.96 7.312a43.481 43.481 0 0 0 2.724-2.435l2.147-8.014-1.767.452L38.345 4h-7.117Zm4.428 2-2.342 7.808-2.762.706L32.772 6h2.884Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.589 23.169c-3.952 3.63-7.601 5.802-11.543 5.796-3.944-.006-7.625-2.194-11.638-5.828L14.766 42h18.469l2.354-18.831ZM11.469 20c-.78 0-1.383.684-1.287 1.458l2.6 20.79A2 2 0 0 0 14.765 44h18.469a2 2 0 0 0 1.984-1.752l2.6-20.795a1.293 1.293 0 0 0-2.204-1.071c-8.94 8.796-14.159 8.76-23.23-.007A1.327 1.327 0 0 0 11.47 20Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUnhealthyFood);
export default ForwardRef;
