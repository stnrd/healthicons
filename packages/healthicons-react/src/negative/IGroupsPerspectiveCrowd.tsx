import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIGroupsPerspectiveCrowd = (
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
      <g clipPath="url(#i_groups_perspective_crowd_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm18 16.5c0 2.486-2.014 4.5-4.5 4.5A4.499 4.499 0 0 1 9 16.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM13.5 23C10.33 23 4 24.787 4 28.333V36h19v-7.667C23 24.787 16.67 23 13.5 23ZM39 16.5c0 2.486-2.014 4.5-4.5 4.5a4.499 4.499 0 0 1-4.5-4.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM24 18a3 3 0 1 0 0-6 3 3 0 1 0 0 6Zm1 10.333C25 24.787 31.33 23 34.5 23s9.5 1.787 9.5 5.333V36H25v-7.667Zm2.962-5.835c.259-.11.522-.215.789-.313C27.228 21.396 25.27 21 24 21c-1.27 0-3.228.396-4.75 1.185.266.098.53.202.787.313 1.172.5 2.354 1.176 3.273 2.08.246.243.48.508.69.797.21-.289.444-.554.69-.797.919-.904 2.101-1.58 3.272-2.08Z"
        />
      </g>
      <defs>
        <clipPath id="i_groups_perspective_crowd_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIGroupsPerspectiveCrowd);
export default ForwardRef;
