import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgChurch = (
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
      <g clipPath="url(#church_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM23 6v3h-3v2h3v2.643L17.778 17S17 17.5 17 18.5V42h4v-9a3 3 0 1 1 6 0v9h4V18.5c0-1-.778-1.5-.778-1.5L25 13.643V11h3V9h-3V6h-2ZM7.5 26.5c-.961.278-1.5 1.08-1.5 2V42h9V24l-7.5 2.5Zm34.5 2c0-.92-.539-1.722-1.5-2L33 24v18h9V28.5Z"
        />
      </g>
      <defs>
        <clipPath id="church_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChurch);
export default ForwardRef;
