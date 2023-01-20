import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUiPreferences = (
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
        d="M12 34a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM24 22c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0V22.922c0-.526-.474-.922-1-.922Zm1-9a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0v6ZM36 42a1 1 0 0 1-1-1v-7.078c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 0 1-1 1Zm-1-18a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v17Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 42a1 1 0 0 1-1-1v-2.078c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 0 1-1 1Zm-1-14a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v21ZM24 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM36 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUiPreferences);
export default ForwardRef;
