import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgWashHands = (
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
      <g clipPath="url(#wash_hands_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm6 31a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10.996a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V31.001Zm11.705-.811c.932-.425 3.21 0 3.21 0l6.626 1.486s1.657.531 3.21.531.624 2.126-.415 2.868c-1.038.742-1.794.702-1.794.702l-5.35-.065s4.66.85 6.42.956c.891.054 2.42-.574 4.13-1.275 1.665-.684 3.5-1.437 5.084-1.699 3.21-.53 3.728 2.337 2.692 3.399-1.035 1.062-9.318 5.097-10.767 5.628-1.136.416-2.509.278-4.058.122-.429-.043-.872-.088-1.326-.122-1.81-.137-3.192-.577-4.56-1.012-1.468-.466-2.919-.927-4.862-1.006-.652-.026-2.178.055-2.945.1V31.94c1.326-.472 4.011-1.436 4.705-1.752ZM26 20.429c0 2-1.54 3.571-3.5 3.571S19 22.429 19 20.429 22.5 14 22.5 14s3.5 4.571 3.5 6.429ZM36 21c2.778 0 5-2.163 5-4.868C41 13.428 36 6 36 6s-5 7.428-5 10.132C31 18.836 33.222 21 36 21Z"
        />
      </g>
      <defs>
        <clipPath id="wash_hands_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgWashHands);
export default ForwardRef;
