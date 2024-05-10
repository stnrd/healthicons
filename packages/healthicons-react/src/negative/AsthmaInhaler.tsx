import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgAsthmaInhaler = (
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
      <g clipPath="url(#asthma__inhaler_svg__a)" fill="#000">
        <path d="m8.847 9.778 1.162 4.333 5.54-2.519-.903-3.367-5.8 1.553Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM16.32 6.741a1 1 0 0 0-1.225-.707l-7.733 2.07a1 1 0 0 0-.708 1.225l1.508 5.622-1.076.489a1 1 0 0 0-.55 1.174l5.68 20.708A5.003 5.003 0 0 0 17.04 41H30A1.001 1.001 0 0 0 31 40V28a1 1 0 0 0-1-1h-6.175l-4.276-15.947a1 1 0 0 0-1.381-.651l-.772.35-1.075-4.01ZM35 29h-2v10h2V29Zm4 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        />
      </g>
      <defs>
        <clipPath id="asthma__inhaler_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgAsthmaInhaler);
export default ForwardRef;
