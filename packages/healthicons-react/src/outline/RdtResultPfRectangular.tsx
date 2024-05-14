import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultPfRectangular = (
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
      <path d="M10.85 11.105c.238-.105.495-.131.743-.079.248.053.485.185.677.39a1 1 0 0 0 1.46-1.368 3.301 3.301 0 0 0-1.722-.978 3.207 3.207 0 0 0-1.966.206 3.383 3.383 0 0 0-1.495 1.304A3.62 3.62 0 0 0 8 12.5c0 .678.188 1.346.547 1.92.36.574.877 1.031 1.495 1.304a3.208 3.208 0 0 0 1.966.206 3.3 3.3 0 0 0 1.722-.978 1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.207 1.207 0 0 1-.742-.079 1.384 1.384 0 0 1-.609-.537A1.62 1.62 0 0 1 10 12.5c0-.31.087-.61.242-.858.156-.248.37-.432.609-.537ZM38 22a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM31 24a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 21H11a3 3 0 0 0 0 6h15a3 3 0 1 0 0-6Zm-16 3a1 1 0 0 0 1 1h2v-2h-2a1 1 0 0 0-1 1Zm12-1h-7v2h7v-2Zm5 1a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 29a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10Zm2-10v10h36V19H6ZM13 33a1 1 0 0 1 1-1h2.5a2.5 2.5 0 0 1 0 5H15v1a1 1 0 1 1-2 0v-5Zm4 1.5a.5.5 0 0 0-.5-.5H15v1h1.5a.5.5 0 0 0 .5-.5ZM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H28Zm3 2.5a.5.5 0 0 1-.5.5H29v-1h1.5a.5.5 0 0 1 .5.5Z"
      />
      <path d="M22.5 39a1 1 0 0 0 .936-.649l1.5-4a1 1 0 1 0-1.872-.702l-.564 1.503-.564-1.503a1 1 0 0 0-1.872.702l1.5 4A1 1 0 0 0 22.5 39ZM35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2 1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.116 2.116 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRdtResultPfRectangular);
export default ForwardRef;
