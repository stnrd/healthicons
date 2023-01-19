import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledPolygon = (
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
      <path fill="#333" d="M18 38a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M14 20a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M42 20a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M38 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M38 38a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M34 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M28 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M24 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m34.919 19.028-9-6.429 1.162-1.627 9 6.429-1.162 1.627Zm-13.135-6.217-8.703 6.217-1.162-1.627 8.703-6.217 1.162 1.627Zm-10.141 9.972 2.666 12-1.952.434-2.667-12 1.953-.434Zm22.047 12 2.556-11.5 1.952.434-2.555 11.5-1.953-.434ZM17 37h14v2H17v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledPolygon);
export default ForwardRef;
