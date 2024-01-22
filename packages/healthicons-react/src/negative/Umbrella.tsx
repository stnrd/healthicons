import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUmbrella = (
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
      <g clipPath="url(#umbrella_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.976 5a1 1 0 1 0-2 0v1.029c-9.144.5-16.47 7.826-16.97 16.97-.017.293.339.343.557.147a7.172 7.172 0 0 1 4.815-1.847c2.17 0 4.116.96 5.436 2.48.119.137.289.22.47.22.16 0 .313-.065.428-.177a8.97 8.97 0 0 1 5.264-2.47V39.5a4.5 4.5 0 1 0 9 0V38a1 1 0 1 0-2 0v1.5a2.5 2.5 0 0 1-5 0V21.356a8.969 8.969 0 0 1 5.223 2.456.655.655 0 0 0 .453.187c.191 0 .37-.088.496-.232a7.182 7.182 0 0 1 5.426-2.468c1.851 0 3.54.699 4.815 1.847.218.196.573.146.557-.147-.5-9.144-7.826-16.47-16.97-16.97V5Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="umbrella_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUmbrella);
export default ForwardRef;
