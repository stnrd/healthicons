import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgMoneyBag = (
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
      <g clipPath="url(#money-bag_svg__a)" fill="#000">
        <path d="M14.696 9.561c.924.291 1.904.545 2.9.729 2.159.398 4.333.457 6.193-.08 2.364-.685 4.845-1.239 7.17-1.567-1.984-.653-4.383-1.17-6.92-1.17-3.662 0-7.062 1.075-9.343 2.088Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.772 24.667A4.001 4.001 0 0 0 25 22v-1h-2v1a4 4 0 0 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666ZM23 24a2 2 0 1 0 0 4v-4Zm2 10a2 2 0 1 0 0-4v4Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM12.972 8.385c2.435-1.22 6.55-2.711 11.067-2.711 4.433 0 8.449 1.437 10.873 2.643l.015.007.105.053c.654.33 1.184.641 1.568.897l-2.619 3.828-1.48.768c-5.097 2.572-11.931 2.572-17.027 0l-1.304-.519-2.77-4.077c.257-.169.578-.361.956-.567.191-.105.397-.212.616-.322Zm20.34 7.092.245-.123C41.913 24.282 48.5 41.67 24.039 41.67S6.009 24.6 14.429 15.36l.234.118c5.606 2.828 13.042 2.828 18.649 0Z"
        />
      </g>
      <defs>
        <clipPath id="money-bag_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgMoneyBag);
export default ForwardRef;
