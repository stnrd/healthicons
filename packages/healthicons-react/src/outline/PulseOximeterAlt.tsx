import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgPulseOximeterAlt = (
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
      <path fill="#fff" d="M0 0h48v48H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 12H7a1 1 0 0 0-1 1v4.85l1.235 1.698A4 4 0 0 1 8 21.9v4.2a4 4 0 0 1-.765 2.352L6 30.15V35a1 1 0 0 0 1 1h23c6.627 0 12-5.373 12-12s-5.373-12-12-12ZM7 10a3 3 0 0 0-3 3v4.85a2 2 0 0 0 .383 1.176l1.234 1.698A2 2 0 0 1 6 21.9v4.2a2 2 0 0 1-.383 1.176l-1.234 1.698A2 2 0 0 0 4 30.15V35a3 3 0 0 0 3 3h23c7.732 0 14-6.268 14-14s-6.268-14-14-14H7Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 16H13a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h17a8 8 0 1 0 0-16Zm-17-2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h17c5.523 0 10-4.477 10-10s-4.477-10-10-10H13Z"
        fill="#000"
      />
      <path d="M36 24a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 20a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2v-8Zm1 3a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm7.25 4c0-.038-.016-.091-.078-.146a.446.446 0 0 0-.297-.104h-.75c-.216 0-.335.12-.364.194a.75.75 0 1 1-1.394-.554c.28-.704.994-1.14 1.758-1.14h.75c.95 0 1.875.703 1.875 1.75 0 .546-.266 1.015-.646 1.322l-1.08.928H27a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.489-1.319l2.625-2.255a.74.74 0 0 1 .022-.017c.074-.06.092-.119.092-.159Z"
        fill="#000"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPulseOximeterAlt);
export default ForwardRef;
