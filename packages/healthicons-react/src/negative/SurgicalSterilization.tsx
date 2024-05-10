import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSurgicalSterilization = (
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
      <g clipPath="url(#surgical_sterilization_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM24 36a3.98 3.98 0 0 1 2.185.649L28.002 4l.998.056.998-.056 1.817 32.649A4 4 0 1 1 30 40.03l-.224-4.018h-1.552L28 40.03A4 4 0 1 1 24 36Zm5-13.944.665 11.956h-1.33L29 22.056Zm0-3.021a1 1 0 1 0 .001-1.999A1 1 0 0 0 29 19.035ZM24 38a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM15 15V4s-3.478 2.26-3.948 10.998C10.993 16.101 11.895 17 13 17a2 2 0 0 0 2-2Zm-1.5 4a1.5 1.5 0 0 0-1.5 1.5v3.086l3-3V20.5a1.5 1.5 0 0 0-1.5-1.5ZM12 28.086v-1.672l3-3v1.672l-3 3Zm0 2.828v1.672l3-3v-1.672l-3 3ZM12 42.5v-7.086l3-3V42.5a1.5 1.5 0 0 1-3 0Z"
        />
      </g>
      <defs>
        <clipPath id="surgical_sterilization_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSurgicalSterilization);
export default ForwardRef;
