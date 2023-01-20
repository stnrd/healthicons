import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiUserProfile = (
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
        d="M0 0h48v48H0V0Zm11 35.63c0 .34.057.675.166.991A17.942 17.942 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18c0 4.924-1.977 9.387-5.181 12.636a2.99 2.99 0 0 0-2.498-4.002c-7.758-.803-12.836-.88-20.632-.018A3.028 3.028 0 0 0 11 35.631ZM4 24c0 10.772 8.517 19.556 19.184 19.984a10.295 10.295 0 0 0 .678.015L24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24Zm20 4a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiUserProfile);
export default ForwardRef;
