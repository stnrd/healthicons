import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgForestPersons = (
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
      <path d="M15 21a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0V21Z" fill="#333" />
      <path
        d="M6 40.5A1.5 1.5 0 0 1 7.5 39h33a1.5 1.5 0 0 1 0 3h-33A1.5 1.5 0 0 1 6 40.5Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.41 13.002c.092-.414.14-.845.14-1.288C21.55 8.558 19.108 6 16.095 6c-3.012 0-5.454 2.558-5.454 5.714 0 .443.048.874.139 1.288-1.68.7-2.867 2.418-2.867 4.426 0 .488.07.957.2 1.4A3.81 3.81 0 0 0 9.905 26h12.38a3.81 3.81 0 0 0 1.793-7.172c.13-.443.199-.912.199-1.4 0-2.008-1.187-3.726-2.866-4.426ZM33.602 24.003a.31.31 0 0 0-.067.011c-2.24.799-3.607 2.47-4.59 5.313a1 1 0 0 1-1.89-.654c1.103-3.19 2.803-5.472 5.81-6.543.696-.248 1.52-.103 2.125.12.601.223 1.348.657 1.703 1.36.204.403.382.764.544 1.094.216.44.405.824.592 1.18.32.609.575 1.018.833 1.31.24.274.488.449.813.57.347.13.827.216 1.553.236a1 1 0 0 1-.056 2c-.838-.024-1.563-.124-2.198-.362a3.936 3.936 0 0 1-1.612-1.12c-.422-.479-.766-1.062-1.104-1.705a58.554 58.554 0 0 1-.635-1.265c-.162-.33-.334-.678-.516-1.038a.605.605 0 0 0-.155-.147 1.906 1.906 0 0 0-.455-.237 2.051 2.051 0 0 0-.514-.12 1.046 1.046 0 0 0-.181-.003Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.59 22.504a1 1 0 0 1 .906 1.086l-.456 5.016 5.03 4.737a.999.999 0 0 1 .24.348l1.615 3.929a1 1 0 0 1-1.85.76l-1.533-3.729-5.228-4.923a1 1 0 0 1-.31-.819l.5-5.5a1 1 0 0 1 1.086-.905Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.969 24.747a1 1 0 0 0-1.938-.494l-1.344 5.264c.182.035.356.12.5.257l1.207 1.142 1.575-6.169Zm-2.15 8.379-1.653-1.565-.201.786-.83 2.749-2.745 2.111a1 1 0 0 0 1.22 1.586l3-2.308a1 1 0 0 0 .347-.504l.862-2.855Z"
        fill="#333"
      />
      <path
        d="M38 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM36.5 26l-1.56 6-3.713-2.941.303-4.883L34.94 24l1.56 2Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgForestPersons);
export default ForwardRef;
