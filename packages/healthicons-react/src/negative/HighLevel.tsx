import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgHighLevel = (
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
      <g clipPath="url(#high_level_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM21.519 29.91a1.614 1.614 0 0 0-.973.597l-1.638 2.43c-.183 1.213-.053 1.696.665 2.48l2.633 1.284c.364.15.77.16 1.141.032l12.716-5.872c1.891-.657 1.385-2.617-.581-2.24L21.519 29.91ZM6.109 24a17.926 17.926 0 0 1 4.956-10.52l3.056 3.055 1.415-1.414-3.001-3A17.925 17.925 0 0 1 23 8.027V13h2V8.027a17.924 17.924 0 0 1 10.465 4.094L32.585 15 34 16.414l2.935-2.935A17.926 17.926 0 0 1 41.891 24h-4.207v2H42a17.905 17.905 0 0 1-4.106 11.427l-3.42-3.42-1.414 1.414 3.477 3.477-.013.012 1.391 1.437A19.928 19.928 0 0 0 44 25.99C44 14.95 35.045 6 24 6S4 14.949 4 25.99a19.923 19.923 0 0 0 5.79 14.065l1.42-1.407-.019-.02 3.006-3.005-1.414-1.414-2.919 2.918A17.902 17.902 0 0 1 6 26h4.053v-2H6.109Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="high_level_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgHighLevel);
export default ForwardRef;
