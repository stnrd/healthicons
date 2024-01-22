import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgDrone = (
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
        d="m31.57 19.103-2.29 4.672 2.541 4.987a7 7 0 1 1-3.006 2.956L24 29.163l-4.815 2.555a7 7 0 1 1-3.006-2.956l2.541-4.986-2.29-4.673a7 7 0 1 1 2.895-3.1L24 18.388l4.675-2.385a7 7 0 1 1 2.895 3.1ZM35 18a5 5 0 1 0-4.542-2.907l2.902-1.48a1.75 1.75 0 1 1 .535.745l-1.443 2.945A4.977 4.977 0 0 0 35 18Zm-17.458-2.907a5 5 0 1 0-1.994 2.21l-1.443-2.946a1.75 1.75 0 1 1 .535-.745l2.902 1.481Zm-2.271 15.451a5 5 0 1 0 2.147 2.112l-2.872 1.524a1.75 1.75 0 1 1-.752-.74l1.477-2.896Zm15.311 2.112a5 5 0 1 0 2.147-2.112l1.476 2.896a1.75 1.75 0 1 1-.752.74l-2.87-1.524ZM24.91 20.169l4.883-2.491.163.175-2.471 5.042a2 2 0 0 0 .014 1.789l2.674 5.247a7.24 7.24 0 0 0-.16.158l-5.075-2.692a2 2 0 0 0-1.874 0l-5.075 2.692a7.24 7.24 0 0 0-.16-.158l2.674-5.247a2 2 0 0 0 .014-1.789l-2.471-5.042c.055-.058.11-.116.163-.175l4.883 2.491a2 2 0 0 0 1.818 0Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgDrone);
export default ForwardRef;
