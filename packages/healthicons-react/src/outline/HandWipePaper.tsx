import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHandWipePaper = (
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
        d="M8 6v7.857c0 .549.23 1.088.662 1.495a2.439 2.439 0 0 0 1.671.648H12a1 1 0 1 1 0 2h-1.667a4.438 4.438 0 0 1-3.043-1.193A4.055 4.055 0 0 1 6 13.857V6h2ZM42 6v7.857a4.054 4.054 0 0 1-1.29 2.95A4.438 4.438 0 0 1 37.667 18H36a1 1 0 1 1 0-2h1.667c.637 0 1.237-.24 1.67-.648.432-.407.663-.946.663-1.495V6h2Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 12a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v24a1 1 0 0 1-1.447.894L33 35.618l-2.553 1.276a1 1 0 0 1-.894 0L27 35.618l-2.553 1.276a1 1 0 0 1-.84.025l-2.93-1.255a1 1 0 1 1 .788-1.838l2.503 1.072 2.585-1.292a1 1 0 0 1 .894 0L30 34.882l2.553-1.276a1 1 0 0 1 .894 0l1.553.776V13H13v16a1 1 0 1 1-2 0V12Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.848 23.47a1 1 0 0 1-.317 1.378l-1.29.807a7.027 7.027 0 0 0-2.386 2.467A6.45 6.45 0 0 0 8 31.319V41a1 1 0 1 1-2 0v-9.681a8.45 8.45 0 0 1 1.117-4.188 9.027 9.027 0 0 1 3.062-3.17l1.29-.809a1 1 0 0 1 1.379.317ZM21.235 31.081a1.815 1.815 0 0 0-3.178-1.754l-3.676 6.535-1.743-.98 3.676-6.535a3.815 3.815 0 0 1 6.68 3.687l-5.115 9.442a1 1 0 0 1-1.758-.952l5.114-9.443Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHandWipePaper);
export default ForwardRef;
