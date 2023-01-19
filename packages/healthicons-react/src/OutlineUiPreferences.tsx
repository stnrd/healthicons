import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineUiPreferences = (
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
        d="M12 34a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12-14c-.526 0-1 .396-1 .922V41a1 1 0 1 0 2 0V22.922c0-.526-.474-.922-1-.922Zm1-9a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0v6Zm11 29a1 1 0 0 1-1-1v-7.078c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 0 1-1 1Zm-1-18a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v17Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 42a1 1 0 0 1-1-1v-2.078c0-.526.474-.922 1-.922s1 .396 1 .922V41a1 1 0 0 1-1 1Zm-1-14a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v21Zm13-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineUiPreferences);
export default ForwardRef;
