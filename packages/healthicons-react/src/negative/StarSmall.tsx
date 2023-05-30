import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgStarSmall = (
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
      <g clipPath="url(#star_small_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.917 14.568a1.025 1.025 0 0 0-1.834 0L20.63 19.52c-.15.3-.438.51-.77.558l-5.484.793a1.018 1.018 0 0 0-.567 1.739l3.968 3.854c.24.234.35.571.294.902l-.937 5.441c-.143.833.734 1.468 1.484 1.075l4.905-2.57c.298-.156.654-.156.952 0l4.905 2.57c.75.393 1.627-.242 1.484-1.075l-.937-5.441c-.057-.33.053-.668.294-.902l3.968-3.854a1.018 1.018 0 0 0-.567-1.739l-5.483-.794a1.023 1.023 0 0 1-.77-.557l-2.453-4.95Z"
          fill="#333"
        />
      </g>
      <defs>
        <clipPath id="star_small_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgStarSmall);
export default ForwardRef;
