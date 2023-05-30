import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgObservation = (
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
      <g clipPath="url(#observation_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM20.11 23.066h17.956c2.173 0 3.934 1.776 3.934 3.967C42 29.223 40.239 31 38.066 31H38v3h4v2h-3.05a3.5 3.5 0 1 1-4.899 0H13.948a3.5 3.5 0 1 1-4.899 0H6v-2h3V23.343l-.833-.839a4.034 4.034 0 0 1 0-5.676 3.953 3.953 0 0 1 3.892-1.021l.704-.704a3.771 3.771 0 0 1 5.333.002l1.8 1.801a3.77 3.77 0 0 1-.002 5.333l-.368.368.366.369c.058.058.137.09.218.09Zm-1.993-1.878.364-.364a1.77 1.77 0 0 0 0-2.504l-1.8-1.8a1.771 1.771 0 0 0-2.504-.002l-.35.35 4.29 4.32ZM36 31v3H11v-8.644l5.275 5.311c.212.213.498.333.797.333H36Zm0-15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm1-8a1 1 0 1 0-2 0v2.303l.168.252 1 1.5a1 1 0 0 0 1.664-1.11L37 11.697V10Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="observation_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgObservation);
export default ForwardRef;
