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
        d="M48 0H0v48h48V0ZM18 18.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.415 2H30v.034c2.25.304 4 2.635 4 5.466 0 2.467-1.328 4.554-3.159 5.252a73.445 73.445 0 0 0 1.522 3.234 1.009 1.009 0 0 1-.754 1.453c-5.463.76-9.218.74-15.155-.012-.699-.088-1.088-.858-.764-1.483.43-.83 1-1.972 1.53-3.17C15.357 29.1 14 26.994 14 24.5c0-2.831 1.75-5.162 4-5.466V19h.085a1.497 1.497 0 0 1-.085-.5Zm2.993.5c0 2.15-.184 3.693-.662 4.68-.226.465-.502.775-.836.976-.337.204-.809.344-1.495.344v2c.96 0 1.81-.197 2.53-.632.724-.438 1.24-1.071 1.601-1.817.696-1.436.862-3.393.862-5.551h-2Zm6.676 4.68c-.478-.987-.662-2.53-.662-4.68h-2c0 2.158.166 4.115.862 5.551.361.746.877 1.379 1.6 1.817.72.435 1.571.632 2.531.632v-2c-.686 0-1.158-.14-1.495-.344-.334-.201-.61-.51-.836-.976ZM19 37.014V40.5a1.5 1.5 0 0 0 2.948.391l.94-3.483A38.92 38.92 0 0 1 19 37.014Zm7.11.387.942 3.49a1.5 1.5 0 0 0 2.948-.39V37a40.942 40.942 0 0 1-3.89.401ZM24 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGirl1015Y);
export default ForwardRef;
