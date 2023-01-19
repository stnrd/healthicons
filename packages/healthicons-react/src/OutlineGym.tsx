import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
import { HealthIconsContext } from "./HealthIconsContext";
const SvgOutlineGym = (
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
        d="M39 8H9a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM9 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M29 16h3v16h-3V16Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M31 17h-1v14h1V17Zm-2-1v16h3V16h-3Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M34 19h3v10h-3V19Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M36 20h-1v8h1v-8Zm-2-1v10h3V19h-3Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M19 32h-3V16h3v16Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M17 31h1V17h-1v14Zm2 1V16h-3v16h3Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M14 29h-3V19h3v10Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 28h1v-8h-1v8Zm2 1V19h-3v10h3Zm24-4h-4v-2h4v2Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13.5 25H10v-2h3.5v2ZM27 25h-6v-2h6v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgOutlineGym);
export default ForwardRef;
