import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirus = (
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
      <g clipPath="url(#virus_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM23 10.035a13.94 13.94 0 0 0-8.167 3.384l1.389 1.389a1 1 0 0 1-1.414 1.414l-1.39-1.39A13.94 13.94 0 0 0 10.035 23H12a1 1 0 1 1 0 2h-1.965a13.94 13.94 0 0 0 3.384 8.167l1.389-1.389a1 1 0 0 1 1.414 1.415l-1.39 1.389A13.94 13.94 0 0 0 23 37.965V36a1 1 0 1 1 2 0v1.965a13.94 13.94 0 0 0 8.167-3.384l-1.389-1.389a1 1 0 1 1 1.414-1.414l1.39 1.39A13.94 13.94 0 0 0 37.965 25H36a1 1 0 1 1 0-2h1.965a13.94 13.94 0 0 0-3.384-8.167l-1.389 1.389a1 1 0 0 1-1.414-1.415l1.39-1.389A13.94 13.94 0 0 0 25 10.035V12a1 1 0 1 1-2 0v-1.965ZM22 27a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm1-10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm8 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM21 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v2a1 1 0 1 1-2 0V6h-1a1 1 0 0 1-1-1Zm4 35a1 1 0 1 0-2 0v2h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-2Zm-13.728-.443-2.828-2.829a1 1 0 1 1 1.414-1.414l.707.707 1.414-1.414a1 1 0 1 1 1.415 1.414l-1.415 1.414.707.707a1 1 0 0 1-1.414 1.415ZM34.607 11.98a1 1 0 1 0 1.414 1.414l1.414-1.414.707.707a1 1 0 0 0 1.414-1.415l-2.828-2.828a1 1 0 1 0-1.414 1.414l.707.707-1.414 1.415ZM5 27a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1h2a1 1 0 1 1 0 2H6v1a1 1 0 0 1-1 1Zm35-4a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1h-2ZM8.444 12.687a1 1 0 0 1 0-1.415l2.828-2.828a1 1 0 1 1 1.414 1.414l-.707.707 1.414 1.415a1 1 0 0 1-1.414 1.414l-1.414-1.415-.707.708a1 1 0 0 1-1.414 0Zm27.577 21.92a1 1 0 0 0-1.414 1.414l1.414 1.414-.707.707a1 1 0 0 0 1.414 1.415l2.828-2.829a1 1 0 1 0-1.414-1.414l-.707.707-1.414-1.414Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="virus_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirus);
export default ForwardRef;
