import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSimpleLogo = (
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
      <g clipPath="url(#simple_logo_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24.544 44c-7.983 0-14.456-6.512-14.456-14.546C10.088 18.545 24.544 4 24.544 4S39 18.546 39 29.454C39 37.489 32.528 44 24.544 44Zm8.302-10.756a1.755 1.755 0 0 0-2.47.325l-.244.317c-2.821 3.692-8.354 3.692-11.176 0l-.243-.317a1.755 1.755 0 0 0-2.47-.325 1.78 1.78 0 0 0-.324 2.486l.243.317c4.233 5.538 12.532 5.538 16.764 0l.243-.317a1.78 1.78 0 0 0-.323-2.486Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="simple_logo_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSimpleLogo);
export default ForwardRef;
