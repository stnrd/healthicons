import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgGroupDiscussionMeetingx3 = (
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
      <g clipPath="url(#group-discussion-meetingx3_svg__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0h48v48H0V0Zm18.5 26c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4Zm-4 6C11.663 32 6 33.523 6 36.545V42h17v-5.455C23 33.523 17.337 32 14.5 32Zm23-6c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4ZM24 28c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm-1-15.167A4.833 4.833 0 0 0 18.167 8h-3.169a4.998 4.998 0 0 0-.181 9.993L15 18v2s8-1.167 8-7.167ZM31.236 6A5.236 5.236 0 0 0 26 11.236c0 6.5 9 7.764 9 7.764v-3h2a5 5 0 0 0 0-10h-5.764ZM25 36.545C25 33.523 30.663 32 33.5 32c2.837 0 8.5 1.523 8.5 4.545V42H25v-5.455ZM24 35v-.455c0-1.677 1.847-2.893 4.005-3.643A9.41 9.41 0 0 0 24 30a9.41 9.41 0 0 0-4.005.902c2.158.75 4.005 1.966 4.005 3.643V35Z"
        />
      </g>
      <defs>
        <clipPath id="group-discussion-meetingx3_svg__a">
          <path d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGroupDiscussionMeetingx3);
export default ForwardRef;
