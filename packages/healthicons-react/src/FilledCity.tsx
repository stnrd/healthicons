import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgFilledCity = (
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
        d="M8 43a1 1 0 0 1 1-1h30a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 22v20h5V22h-5Zm-1-2a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-7Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m17 4 16 6v14h-5a1 1 0 0 0-1 1v17H17V4Zm3 9h2v2h-2v-2Zm6 0h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-6 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-10 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-6 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-4 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm6 0h-2v2h2v-2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M29 26v16h7V26h-7Zm-1-2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V25a1 1 0 0 0-1-1h-9Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M34 30h-3v-2h3v2Zm0 4h-3v-2h3v2Zm0 4h-3v-2h3v2Zm0 4h-3v-2h3v2ZM15 13v8h-2v-8h2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgFilledCity);
export default ForwardRef;
