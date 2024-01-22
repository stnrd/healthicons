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
      <path d="M32 20a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.184 43.984C12.517 43.556 4 34.772 4 24 4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20a21.253 21.253 0 0 1-.274 0c-.181 0-.362-.006-.542-.016ZM11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.942 17.942 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiUserProfile);
export default ForwardRef;
