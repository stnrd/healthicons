import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVentilatorAlt = (
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
      <g clipPath="url(#ventilator_alt_svg__a)" fill="#000">
        <path d="M22 23h4v-3h-4v3ZM24.683 9.207l2.252 4.037 1.521-1.816H31v2h-1.61l-2.787 3.327-2.21-3.962-1.183 1.493h-6.771v-2h5.804l2.44-3.079ZM8 20.333v-2h3v2H8ZM26 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM23 27a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm16 40.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33.5 42a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm4.5-4H10v-2h10v-4.17c.313.11.65.17 1 .17h1v4h4v-4h1c.35 0 .687-.06 1-.17V36h10v2ZM15 6h18v14h-5v3.17c1.165.412 2 1.524 2 2.83v.12c.32.026.667.082 1.011.197.553.183 1.116.523 1.528 1.126.408.595.604 1.352.604 2.26 0 .36.165.644.534.881.397.256.992.416 1.644.416.653 0 1.248-.16 1.645-.416.369-.237.534-.521.534-.882V18.855A3.502 3.502 0 0 1 35 15.5v-4a3.5 3.5 0 1 1 7 0v4a3.502 3.502 0 0 1-2.5 3.355v10.847c0 1.171-.63 2.036-1.453 2.565-.794.51-1.79.733-2.726.733-.936 0-1.93-.222-2.725-.733-.824-.53-1.453-1.394-1.453-2.565 0-.625-.134-.955-.254-1.13-.114-.167-.275-.28-.508-.357a2.106 2.106 0 0 0-.384-.085A3 3 0 0 1 27 31h-6a3 3 0 0 1-3-3h-.5c-.958 0-1.704.13-2.195.457-.407.271-.805.79-.805 2.043 0 .983-.334 1.81-.918 2.395a2.939 2.939 0 0 1-2.082.855c-.747 0-1.507-.28-2.082-.855-.584-.585-.918-1.412-.918-2.395v-7.645A3.502 3.502 0 0 1 6 19.5v-4a3.5 3.5 0 1 1 7 0v4a3.502 3.502 0 0 1-2.5 3.355V30.5c0 .517.166.815.332.98a.94.94 0 0 0 .668.27.939.939 0 0 0 .668-.27c.166-.165.332-.463.332-.98 0-1.747.602-2.978 1.695-3.707C15.203 26.121 16.458 26 17.5 26h.5c0-1.306.835-2.418 2-2.83V20h-5V6Z"
        />
      </g>
      <defs>
        <clipPath id="ventilator_alt_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVentilatorAlt);
export default ForwardRef;
