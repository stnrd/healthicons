import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIExamQualification = (
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
        d="M15 32a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15ZM14 37a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.923 15.615a1 1 0 0 0-1.846 0l-3.742 8.98a1.036 1.036 0 0 0-.017.042l-1.241 2.978a1 1 0 0 0 1.846.77L16.917 26h6.166l.994 2.385a1 1 0 0 0 1.846-.77l-1.241-2.978a1.036 1.036 0 0 0-.017-.042l-3.742-8.98ZM20 18.6l2.25 5.4h-4.5L20 18.6Z"
        fill="#333"
      />
      <path
        d="M30 21a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 15 28 4H14a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V15Zm-11 0a1 1 0 0 0 1 1h8v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h13v9Zm7.388-1L29 8.073V14h5.388Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIExamQualification);
export default ForwardRef;
