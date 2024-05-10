import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHospice = (
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
      <g clipPath="url(#hospice_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM23.058 6.086l17.65 17.708a1 1 0 0 1-1.416 1.412L37 22.906V41a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V22.922l-2.294 2.286a1 1 0 1 1-1.412-1.416L23.058 6.086ZM35 20.9 23.053 8.914 11 20.928V40h24V20.9ZM19.25 20C16.794 20 15 22.655 15 25.517c0 .77.116 1.506.32 2.205.1.342.22.676.36 1C17.61 33.244 23 36 23 36s8-4.355 8-10.483C31 22.655 29.206 20 26.75 20c-1.705 0-2.97 1.191-3.75 2.88-.78-1.689-2.046-2.88-3.75-2.88Z"
        />
      </g>
      <defs>
        <clipPath id="hospice_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHospice);
export default ForwardRef;
