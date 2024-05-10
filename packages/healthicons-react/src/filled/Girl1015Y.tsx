import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGirl1015Y = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 17a1.5 1.5 0 0 0-1.415 2H18v.034c-2.25.304-4 2.635-4 5.466 0 2.494 1.358 4.6 3.22 5.274a57.315 57.315 0 0 1-1.53 3.17c-.324.625.066 1.395.764 1.483 5.937.752 9.692.772 15.155.012.68-.095 1.06-.838.754-1.453-.42-.84-.988-2.016-1.522-3.234C32.671 29.054 34 26.967 34 24.5c0-2.831-1.75-5.162-4-5.466V19h-.085a1.5 1.5 0 0 0-1.415-2h-9Zm.831 6.68c.478-.987.662-2.53.662-4.68h2c0 2.158-.166 4.115-.862 5.551-.361.746-.877 1.379-1.6 1.817-.72.435-1.571.632-2.531.632v-2c.686 0 1.158-.14 1.495-.344.334-.201.61-.51.836-.976ZM27.007 19c0 2.15.184 3.693.662 4.68.226.465.502.775.836.976.337.204.809.344 1.495.344v2c-.96 0-1.81-.197-2.53-.632-.724-.438-1.24-1.071-1.601-1.817-.696-1.436-.862-3.393-.862-5.551h2ZM19 37.014V40.5a1.5 1.5 0 0 0 2.948.391l.94-3.483A38.92 38.92 0 0 1 19 37.014Zm7.11.387.942 3.49a1.5 1.5 0 0 0 2.948-.39V37a40.942 40.942 0 0 1-3.89.401Z"
      />
      <path d="M28.5 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGirl1015Y);
export default ForwardRef;
