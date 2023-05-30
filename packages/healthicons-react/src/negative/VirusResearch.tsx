import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgVirusResearch = (
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
      <g clipPath="url(#virus-research_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM21 6a1 1 0 1 0 0 2h1v3.041a11.948 11.948 0 0 0-6.75 2.796l-.028-.03-2.121-2.12.707-.708a1 1 0 0 0-1.415-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.415l.707-.707 2.122 2.12.03.03A11.947 11.947 0 0 0 11.04 22L11 22H8v-1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-1h3.041a11.947 11.947 0 0 0 2.796 6.75l-.03.028-2.12 2.122-.708-.707a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.415-1.414l-.707-.707 2.12-2.121.03-.03a11.948 11.948 0 0 0 7.203 2.825A9.996 9.996 0 0 1 22 32c0-5.523 4.477-10 10-10 1.04 0 2.044.159 2.988.454a11.948 11.948 0 0 0-2.825-7.204l.03-.028 2.12-2.121.708.707a1 1 0 0 0 1.414-1.415l-2.828-2.828a1 1 0 1 0-1.415 1.414l.708.707-2.122 2.122-.028.03A11.948 11.948 0 0 0 24 11.04V8h1a1 1 0 1 0 0-2h-4Zm1 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.906l4.387 4.387a1 1 0 0 1-1.414 1.414l-4.387-4.387A8 8 0 0 1 24 32Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="virus-research_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgVirusResearch);
export default ForwardRef;
