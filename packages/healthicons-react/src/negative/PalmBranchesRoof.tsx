import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPalmBranchesRoof = (
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
      <g clipPath="url(#palm_branches_roof_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.745 9.14c.105.04.206.09.303.149L26 7.187c.177-.39.706-.508 1.145-.255.44.254.602.77.352 1.12l-1.494 2.083 14.661 13.957c.482.459.463 1.102-.171 1.345C38.856 26.066 34.634 27 24 27c-10.634 0-14.856-.934-16.493-1.563-.634-.243-.653-.886-.171-1.345l14.758-14.05-1.424-1.987c-.25-.35-.09-.869.35-1.123.44-.253.969-.134 1.147.259l.918 2.024c.055-.028.112-.053.17-.075l-.252-2.31c-.048-.447.412-.83.997-.83s1.045.383.997.83l-.252 2.31ZM12 29.407c2.602.336 6.417.593 12 .593s9.398-.257 12-.593v11.159C36 42 28 42 28 42v-5c0-1.912-1.692-4-4-4s-4 2.088-4 4v5s-8 0-8-1.434V29.407Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="palm_branches_roof_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPalmBranchesRoof);
export default ForwardRef;
