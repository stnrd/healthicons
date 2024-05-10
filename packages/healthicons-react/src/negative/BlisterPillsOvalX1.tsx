import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsOvalX1 = (
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
      <g clipPath="url(#blister_pills_oval_x1_svg__a)" fill="#000">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v15a1 1 0 1 0 0 2v15a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V25a1 1 0 1 0 0-2V8Zm3 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
        <path d="M24.243 11.414a2 2 0 0 1 2.828 2.829l-2.828 2.828a2 2 0 0 1-2.829-2.828l2.829-2.829Z" />
      </g>
      <defs>
        <clipPath id="blister_pills_oval_x1_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBlisterPillsOvalX1);
export default ForwardRef;
