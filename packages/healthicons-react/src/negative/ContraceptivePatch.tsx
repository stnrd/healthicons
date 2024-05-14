import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgContraceptivePatch = (
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
      <g clipPath="url(#contraceptive-patch_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM14 6a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8V14a8 8 0 0 0-8-8H14Zm4.1 10.1h11.8a2 2 0 0 1 2 2v11.8a2 2 0 0 1-2 2H18.1a2 2 0 0 1-2-2V18.1a2 2 0 0 1 2-2Zm-4 2a4 4 0 0 1 4-4h11.8a4 4 0 0 1 4 4v11.8a4 4 0 0 1-4 4H18.1a4 4 0 0 1-4-4V18.1Zm7.2.5a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm.9 3.6a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm-2.7-.9a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm.9 3.6a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm2.7 1.8a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm-4.5.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm2.7 1.8a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm2.7-9.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm2.7 1.8a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM24 24.9a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm2.7 1.8a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0ZM24 30.3a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm4.5-11.7a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm.9 3.6a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm-.9 1.8a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm.9 3.6a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm-.9 1.8a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"
        />
      </g>
      <defs>
        <clipPath id="contraceptive-patch_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContraceptivePatch);
export default ForwardRef;
