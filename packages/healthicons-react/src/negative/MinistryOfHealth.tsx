import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMinistryOfHealth = (
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
      <g clipPath="url(#ministry_of_health_svg__a)" fill="#000">
        <path d="M25 12v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2ZM26 29a2 2 0 1 0-4 0v8h4v-8Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H6v6h36v-6h-2.65L24.626 5.22ZM20 29a4 4 0 0 1 8 0v8h6v-4h2v-8h4v8h2v4h2v6H4v-6h2v-4h2v-8h4v8h2v4h6v-8Z"
        />
      </g>
      <defs>
        <clipPath id="ministry_of_health_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMinistryOfHealth);
export default ForwardRef;
