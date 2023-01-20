import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPpeFaceShieldAlt = (
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
        d="M37.638 27.811c-.243.13-.514.198-.79.197h-1.935L34.76 36h-1.296c-2.5 0-4.903-1.023-6.68-2.855C25.003 31.312 24 28.82 24 26.215V14h9.675c.086.336.148.675.147.907l.193 3.167s2.728 4.035 4.347 7.63a1.625 1.625 0 0 1-.125 1.56c-.15.23-.356.418-.599.547ZM32.8 12h2.22c1.862 0 3.64.762 4.947 2.109A7.26 7.26 0 0 1 42 19.163V38h-7.28l.038-2H40V19.163a5.26 5.26 0 0 0-1.469-3.662A4.89 4.89 0 0 0 35.021 14h-1.346a5.964 5.964 0 0 0-.302-.9A13.57 13.57 0 0 0 32.8 12Zm0 0H22v.1H8.596c3.216-4.591 9.035-7.026 15.348-5.773C28.148 7.163 30.967 8.85 32.8 12ZM7.428 14.1H22v5.226H6.037a14.84 14.84 0 0 1 1.39-5.225ZM6 21.327h16v4.889c0 3.116 1.2 6.11 3.347 8.322A11.413 11.413 0 0 0 30 37.45V38h-2.464v4H10.958V31.657a14.762 14.762 0 0 1-3.7-5.036A14.65 14.65 0 0 1 6 21.326Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPpeFaceShieldAlt);
export default ForwardRef;
