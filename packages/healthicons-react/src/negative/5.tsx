import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const Svg5 = (
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
      <g clipPath="url(#5_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM32 10a2 2 0 1 1 0 4H19.64l-.944 4.72c1.489-.416 3.29-.72 5.304-.72 5.523 0 10 4.477 10 10s-4.477 10-10 10h-2.218c-3.516 0-6.537-2.202-7.663-5.32a2 2 0 0 1 3.762-1.36c.557 1.543 2.078 2.68 3.9 2.68H24a6 6 0 0 0 0-12c-3.605 0-6.219 1.216-6.89 1.664a2 2 0 0 1-3.071-2.056l2-10A2 2 0 0 1 18 10h14Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="5_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(Svg5);
export default ForwardRef;
