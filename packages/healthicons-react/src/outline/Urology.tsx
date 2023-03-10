import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "../HealthIconsContext";
const SvgUrology = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.582 13.585a2 2 0 0 1 2.828 0c.985.984 1.593 2.246 1.59 3.415.003 1.169-.605 2.418-1.59 3.402a2 2 0 0 1-2.828-2.828l-.58-.58.58-.581a2 2 0 0 1 0-2.828Zm-2.054 3.408a4.002 4.002 0 0 0 6.296 4.824C36.083 20.558 37.004 18.83 37 17c.005-1.831-.917-3.571-2.175-4.83a4 4 0 0 0-6.297 4.823ZM17.418 13.585a2 2 0 0 0-2.828 0c-.985.984-1.593 2.246-1.59 3.415-.003 1.169.605 2.418 1.59 3.402a2 2 0 0 0 2.828-2.828l.58-.58-.58-.581a2 2 0 0 0 0-2.828Zm2.055 3.408a4.002 4.002 0 0 1-6.297 4.824C11.918 20.558 10.996 18.83 11 17c-.005-1.831.917-3.571 2.176-4.83a4 4 0 0 1 6.296 4.823ZM21.805 28.582c-.52.346-.805.806-.805 1.418a3 3 0 1 0 6 0c0-.612-.285-1.072-.805-1.418C25.646 28.216 24.852 28 24 28c-.852 0-1.646.216-2.195.582Zm5.5-1.664C28.285 27.572 29 28.612 29 30a5 5 0 1 1-10 0c0-1.388.715-2.428 1.695-3.082C21.646 26.284 22.852 26 24 26c1.148 0 2.354.284 3.305.918Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 33a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1ZM16 17a1 1 0 0 1 1-1h3c1.656 0 3 1.34 3 2.998V27a1 1 0 1 1-2 0v-8.002A.999.999 0 0 0 20 18h-3a1 1 0 0 1-1-1ZM32 17a1 1 0 0 0-1-1h-3c-1.656 0-3 1.34-3 2.998V27a1 1 0 1 0 2 0v-8.002A.999.999 0 0 1 28 18h3a1 1 0 0 0 1-1Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 17.984c-.555 0-1.005.45-1.005 1.005a1 1 0 1 1-2 0A3.005 3.005 0 0 1 18 15.984a1 1 0 1 1 0 2ZM30 17.984c.555 0 1.005.45 1.005 1.005a1 1 0 1 0 2 0A3.005 3.005 0 0 0 30 15.984a1 1 0 1 0 0 2Z"
        fill="#333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 15.984c-.555 0-1.005-.45-1.005-1.005a1 1 0 1 0-2 0A3.005 3.005 0 0 0 18 17.983a1 1 0 1 0 0-2ZM30 15.984c.555 0 1.005-.45 1.005-1.005a1 1 0 1 1 2 0A3.005 3.005 0 0 1 30 17.983a1 1 0 1 1 0-2ZM19 30a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z"
        fill="#333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgUrology);
export default ForwardRef;
