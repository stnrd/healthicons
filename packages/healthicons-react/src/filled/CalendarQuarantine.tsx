import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgCalendarQuarantine = (
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
        d="M15 7a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0V7ZM31 7a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0V7Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 38V15.609a.2.2 0 0 0-.002-.032l-.001-.005a.108.108 0 0 0-.037-.021.11.11 0 0 0-.043-.008l-.004.003A4.061 4.061 0 0 1 35.796 17H15.658a6 6 0 0 1-3.347-1.02l-.194-.13C10.787 14.955 9 15.907 9 17.508V38a2 2 0 0 0 2 2h26a2 2 0 0 0 2-2ZM13.232 14.19C10.575 12.402 7 14.306 7 17.508V38a4 4 0 0 0 4 4h26a4 4 0 0 0 4-4V15.609c0-1.918-2.39-2.797-3.633-1.335-.391.46-.966.726-1.57.726h-20.14a4 4 0 0 1-2.232-.68l-.193-.13Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 10H19v3a1 1 0 1 1-2 0v-3h-6a4 4 0 0 0-4 4v6h34v-6a4 4 0 0 0-4-4h-2v3a1 1 0 1 1-2 0v-3Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 12H21v1a3 3 0 1 1-6 0v-1h-4a2 2 0 0 0-2 2v4h30v-4a2 2 0 0 0-2-2v1a3 3 0 1 1-6 0v-1Zm-12-2v3a1 1 0 1 1-2 0v-3h-6a4 4 0 0 0-4 4v6h34v-6a4 4 0 0 0-4-4h-2v3a1 1 0 1 1-2 0v-3H19ZM22.3 23a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 26.5v-2.8h2v2.8h-2ZM27.493 23.693a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m26.093 26.493 2.1-2.1 1.414 1.414-2.1 2.1-1.414-1.414ZM31 28.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.2 30a1 1 0 0 1 1-1H31a1 1 0 1 1 0 2h-2.8a1 1 0 0 1-1-1ZM31.007 33.493a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 1 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m28.207 32.093 2.1 2.1-1.414 1.414-2.1-2.1 1.414-1.414ZM22.3 37a1 1 0 0 1 1-1h1.4a1 1 0 1 1 0 2h-1.4a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 33.2a1 1 0 0 1 1 1V37a1 1 0 1 1-2 0v-2.8a1 1 0 0 1 1-1ZM17.693 33.493a1 1 0 0 1 1.414 0l1.4 1.4a1 1 0 0 1-1.414 1.414l-1.4-1.4a1 1 0 0 1 0-1.414Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m21.907 33.507-2.1 2.1-1.414-1.414 2.1-2.1 1.414 1.414ZM17 28.3a1 1 0 0 1 1 1v1.4a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 30a1 1 0 0 1 1-1h2.8a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1ZM20.507 23.693a1 1 0 0 1 0 1.414l-1.4 1.4a1 1 0 0 1-1.414-1.414l1.4-1.4a1 1 0 0 1 1.414 0Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m20.493 27.907-2.1-2.1 1.414-1.414 2.1 2.1-1.414 1.414Z"
        fill="#333"
      />
      <path d="M29 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="#333" />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCalendarQuarantine);
export default ForwardRef;
