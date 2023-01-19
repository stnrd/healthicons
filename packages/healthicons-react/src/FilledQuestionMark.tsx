import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledQuestionMark = (
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
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      fill="none"
      color="currentColor"
      ref={ref}
      {...props}
    >
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 14c2.222.017 4 1.811 4 4 0 2.2-1.795 4-4.032 4a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-4.25C29.43 24.865 32 21.738 32 18c0-4.386-3.537-7.931-7.904-7.999a1.93 1.93 0 0 0-.064-.001h-.064l-.064.001C19.537 10.069 16 13.614 16 18a2 2 0 0 0 4 0c0-2.189 1.778-3.983 4-4Zm0 24a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledQuestionMark);
export default ForwardRef;
