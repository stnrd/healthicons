import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgIGroupsPerspectiveCrowd = (
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
        d="M18 16.5c0 2.486-2.014 4.5-4.5 4.5A4.499 4.499 0 0 1 9 16.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM4 28.333C4 24.787 10.33 23 13.5 23s9.5 1.787 9.5 5.333V36H4v-7.667ZM39 16.5c0 2.486-2.014 4.5-4.5 4.5a4.499 4.499 0 0 1-4.5-4.5c0-2.486 2.014-4.5 4.5-4.5s4.5 2.014 4.5 4.5ZM27 15a3 3 0 1 1-6 0 3 3 0 1 1 6 0ZM25 28.333C25 24.787 31.33 23 34.5 23s9.5 1.787 9.5 5.333V36H25v-7.667Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.75 22.185c-.266.098-.53.202-.788.313-1.17.5-2.353 1.176-3.272 2.08-.246.243-.48.508-.69.797a6.48 6.48 0 0 0-.69-.797c-.919-.904-2.101-1.58-3.273-2.08a16.46 16.46 0 0 0-.788-.313C20.772 21.396 22.73 21 24 21c1.27 0 3.228.396 4.75 1.185Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIGroupsPerspectiveCrowd);
export default ForwardRef;
