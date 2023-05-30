import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgBlisterPillsRoundX16 = (
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
      <g clipPath="url(#blister_pills_round_x16_svg__a)" fill="#333">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM12 8a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v15a1 1 0 1 0 0 2v15a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V25a1 1 0 1 0 0-2V8Zm3 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        />
        <path d="M18 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM23 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM28 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM33 36.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </g>
      <defs>
        <clipPath id="blister_pills_round_x16_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBlisterPillsRoundX16);
export default ForwardRef;
