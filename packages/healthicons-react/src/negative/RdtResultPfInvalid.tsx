import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgRdtResultPfInvalid = (
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
      <g clipPath="url(#rdt-result-pf-invalid_svg__a)" fill="#000">
        <path d="M40 24a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM32.5 25.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 27a3 3 0 1 1 0-6h15a3 3 0 1 1 0 6H11Zm0-4h11v2H11a1 1 0 1 1 0-2Zm13 2h2a1 1 0 1 0 0-2h-2v2Z"
        />
        <path d="M17 34.5a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5ZM30.5 11a.5.5 0 0 1 0 1H29v-1h1.5Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM10.85 11.105c.238-.105.495-.131.743-.079.248.053.485.185.677.39a1 1 0 0 0 1.46-1.368 3.301 3.301 0 0 0-1.722-.978 3.207 3.207 0 0 0-1.966.206 3.383 3.383 0 0 0-1.495 1.304A3.62 3.62 0 0 0 8 12.5c0 .678.188 1.346.547 1.92.36.574.877 1.031 1.495 1.304a3.208 3.208 0 0 0 1.966.206 3.3 3.3 0 0 0 1.722-.978 1 1 0 1 0-1.46-1.368c-.192.205-.43.337-.677.39a1.207 1.207 0 0 1-.742-.079 1.384 1.384 0 0 1-.609-.537A1.62 1.62 0 0 1 10 12.5c0-.31.087-.61.242-.858.156-.248.37-.432.609-.537ZM4 24a6 6 0 0 0 6 6h28a6 6 0 0 0 0-12H10a6 6 0 0 0-6 6Zm10 8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H14ZM28 9a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-1h1.5a2.5 2.5 0 0 0 0-5H28Zm-4.564 29.351a1 1 0 0 1-1.872 0l-1.5-4a1 1 0 1 1 1.872-.702l.564 1.503.564-1.503a1 1 0 1 1 1.872.702l-1.5 4ZM35 16a1 1 0 0 0 1-1v-2a1 1 0 0 0 0-2 1 1 0 0 0 0-2c-.726 0-1.276.325-1.611.79A2.116 2.116 0 0 0 34 11a1 1 0 1 0 0 2v2a1 1 0 0 0 1 1Z"
        />
      </g>
      <defs>
        <clipPath id="rdt-result-pf-invalid_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRdtResultPfInvalid);
export default ForwardRef;
