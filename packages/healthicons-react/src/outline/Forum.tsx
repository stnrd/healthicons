import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgForum = (
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
        d="M23.073 30.075a10.19 10.19 0 0 1-1.142.064H16V35s-.806-.163-2-.623C10.586 33.064 4 29.33 4 20.07 4 14.51 8.508 10 14.07 10h7.86c4.852 0 8.903 3.431 9.857 8h4.158A8.056 8.056 0 0 1 44 26.056c0 7.279-5.828 10.29-9 11.389-1.185.411-2 .555-2 .555v-3.889h-2.944a8.047 8.047 0 0 1-6.983-4.036ZM14 28.139v4.075a15.558 15.558 0 0 1-2.828-1.612C8.582 28.729 6 25.554 6 20.069A8.07 8.07 0 0 1 14.07 12h7.86a8.07 8.07 0 0 1 8.056 7.597 10.05 10.05 0 0 1-3.604 7.204 8.033 8.033 0 0 1-4.451 1.338H14Zm13.575.27a12.09 12.09 0 0 1-2.232 1.45 6.046 6.046 0 0 0 4.713 2.252H35v3.201a14.757 14.757 0 0 0 2.433-1.225C39.8 32.592 42 30.164 42 26.056A6.056 6.056 0 0 0 35.945 20H32v.07c0 3.469-1.755 6.529-4.425 8.34Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgForum);
export default ForwardRef;
