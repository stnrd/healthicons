import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVaginaAlt = (
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
      <g clipPath="url(#vagina-alt_svg__a)" fill="#000">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0Zm-6 25.852c.008-5.746-1.58-12.004-4.705-19.852h-26.59C7.579 13.848 5.992 20.106 6 25.852c.008 5.614 1.538 10.66 4.504 16.148h26.992c2.966-5.489 4.496-10.534 4.504-16.148Z"
        />
        <path d="M23.143 31.546V42h1.715V31.546l7.021-7.373-1.212-1.273-6.667 7-6.667-7-1.212 1.273 7.022 7.373Z" />
        <path d="M23 26v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0Z" />
      </g>
      <defs>
        <clipPath id="vagina-alt_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVaginaAlt);
export default ForwardRef;
