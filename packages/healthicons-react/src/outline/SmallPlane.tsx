import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgSmallPlane = (
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
        d="M13.806 14.099v.001c.002.021.006.071.017.145.02.15.068.394.171.703.204.612.632 1.495 1.55 2.412l3.736 3.737L8.828 31.548l1.15 1.15 14.917-5.736 8.266 6.2-6.2-8.267L32.7 9.98l-1.15-1.15-10.452 10.45-3.737-3.736c-.917-.917-1.8-1.345-2.412-1.549a4.088 4.088 0 0 0-.703-.171 1.98 1.98 0 0 0-.145-.017h-.294v.293Zm2.646-6.938c1.16-1.161 2.322 0 1.16 1.161l-3.483 3.484s.169 0 .46.046a6.628 6.628 0 0 1 1.768.555c.732.342 1.574.88 2.417 1.722l2.323 2.322 9.037-9.037a2 2 0 0 1 2.828 0l1.151 1.15a2 2 0 0 1 .453 2.133l-5.34 13.884 6.968 9.29 4.03-2.015a.954.954 0 0 1 1.101 1.529l-7.94 7.94a.954.954 0 0 1-1.53-1.102l2.016-4.03-9.29-6.967-13.884 5.34a2 2 0 0 1-2.132-.453l-1.15-1.15a2 2 0 0 1 0-2.829l9.036-9.037-2.322-2.323a8.538 8.538 0 0 1-1.722-2.417 6.628 6.628 0 0 1-.555-1.768c-.046-.291-.046-.46-.046-.46l-3.484 3.484c-1.16 1.161-2.322 0-1.16-1.162l9.29-9.29Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSmallPlane);
export default ForwardRef;
