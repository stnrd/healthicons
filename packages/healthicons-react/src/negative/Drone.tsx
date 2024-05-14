import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDrone = (
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
      <g clipPath="url(#drone_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM18 35a5 5 0 1 1-2.73-4.456l-1.475 2.896a1.75 1.75 0 1 0 .752.74l2.87-1.524c.372.7.583 1.497.583 2.344Zm-1.821-6.238 2.541-4.986-2.29-4.673a7 7 0 1 1 2.895-3.1L24 18.388l4.675-2.385a7 7 0 1 1 2.895 3.1l-2.29 4.672 2.541 4.987a7 7 0 1 1-3.006 2.956L24 29.163l-4.815 2.555a7 7 0 1 1-3.006-2.956Zm14.403 3.894a5 5 0 1 0 2.147-2.112l1.476 2.896a1.75 1.75 0 1 1-.752.74l-2.87-1.524Zm1.87-15.353a5 5 0 1 0-1.994-2.21l2.902-1.48a1.75 1.75 0 1 1 .535.745l-1.443 2.945Zm-14.91-2.21a5 5 0 1 0-1.994 2.21l-1.443-2.946a1.75 1.75 0 1 1 .535-.745l2.902 1.481Z"
        />
      </g>
      <defs>
        <clipPath id="drone_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDrone);
export default ForwardRef;
