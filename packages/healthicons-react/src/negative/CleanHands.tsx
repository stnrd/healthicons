import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCleanHands = (
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
      <g clipPath="url(#clean-hands_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm19 16 1-4 1 4 3 1-3 1-1 4-1-4-3-1 3-1ZM34.5 6l-2.167 7.69L28 15.953l4.333 2.262L34.5 25l2.167-6.786L41 15.952l-4.333-2.261L34.5 6ZM6 30a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V30.001Zm11.705-.811c.932-.425 3.21 0 3.21 0l6.626 1.486s1.657.531 3.21.531.624 2.126-.415 2.868c-1.038.742-1.794.702-1.794.702l-5.35-.065s4.66.85 6.42.956c.891.054 2.42-.574 4.13-1.275 1.665-.684 3.5-1.437 5.084-1.699 3.21-.53 3.728 2.337 2.692 3.399-1.035 1.062-9.318 5.097-10.767 5.628-1.136.416-2.509.278-4.058.122-.429-.043-.872-.088-1.326-.122-1.81-.137-3.192-.577-4.56-1.012-1.468-.466-2.919-.927-4.862-1.006-.652-.026-2.178.055-2.945.1V30.94c1.326-.472 4.011-1.436 4.705-1.752Z"
        />
      </g>
      <defs>
        <clipPath id="clean-hands_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCleanHands);
export default ForwardRef;
