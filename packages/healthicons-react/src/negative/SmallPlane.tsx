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
      <g clipPath="url(#small_plane_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48 0H0v48h48V0ZM8.323 17.613l3.483-3.484s0 2.323 2.323 4.645l2.323 2.323-9.038 9.037a2 2 0 0 0 0 2.829l1.15 1.15a2 2 0 0 0 2.133.453l13.884-5.34 9.29 6.968-2.015 4.03a.954.954 0 0 0 1.529 1.101l7.94-7.94a.954.954 0 0 0-1.102-1.529l-4.03 2.015-6.967-9.29 5.34-13.884a2 2 0 0 0-.453-2.132l-1.15-1.15a2 2 0 0 0-2.829 0l-9.037 9.037-2.323-2.323c-2.322-2.322-4.645-2.323-4.645-2.323l3.484-3.483c1.161-1.162 0-2.323-1.161-1.162l-9.29 9.29c-1.162 1.162 0 2.323 1.16 1.162Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="small_plane_svg__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSmallPlane);
export default ForwardRef;
